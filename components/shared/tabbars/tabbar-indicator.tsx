import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { primaryOne } from "@/constants/colors";
import { usePathname } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");
const segmentWidth = screenWidth / 5;
const shrinkRate = segmentWidth * 0.3;

const TabbarIndicator = () => {
  const translateX = useSharedValue(2);
  const pathname = usePathname();
  console.log("pathname", pathname);

  useEffect(() => {
    const tabIndexMap: { [key: string]: number } = {
      "/search": -2,
      "/favorites": -1,
      "/": 0,
      "/basket": 1,
      "/profile": 2,
    };
    const targetIndex = tabIndexMap[pathname] ?? 0;
    const targetPos = targetIndex * segmentWidth + shrinkRate / 2;
    translateX.value = withSpring(targetPos, {
      stiffness: 250,
      damping: 20,
      mass: 1,
    });
  }, [pathname]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};
const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    bottom: 0,
    left: Dimensions.get("window").width / 2 - segmentWidth / 2,
    height: 4,
    backgroundColor: primaryOne,
    borderRadius: 2,
    width: segmentWidth - shrinkRate,
  },
});

export default TabbarIndicator;
