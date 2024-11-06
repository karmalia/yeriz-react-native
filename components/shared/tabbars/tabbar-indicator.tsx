import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabbarIndicatorProps = {
  activeTab: string;
};

const { width: screenWidth } = Dimensions.get("window");
const segmentWidth = screenWidth / 5;

const TabbarIndicator = ({ activeTab }: TabbarIndicatorProps) => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    const tabIndexMap: { [key: string]: number } = {
      search: 0,
      favorites: 1,
      index: 2,
      basket: 3,
      profile: 4,
    };
    const targetIndex = tabIndexMap[activeTab] ?? 0;
    const targetPos = targetIndex * segmentWidth;
    translateX.value = withSpring(targetPos, {
      stiffness: 150,
      damping: 20,
      mass: 1,
    });
  }, [activeTab]);

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
    left: segmentWidth * 0.1,
    height: 4,
    backgroundColor: "green",
    borderRadius: 2,
    width: segmentWidth * 0.8,
  },
});

export default TabbarIndicator;
