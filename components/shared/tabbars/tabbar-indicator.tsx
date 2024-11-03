import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type IconPos = {
  x: number;
  y: number;
};

type Props = {
  tabIconPositions: any;
  activeTab: string;
};

const { width: screenWidth } = Dimensions.get("window");
const segmentWidth = screenWidth / 5; // Divide screen width into 5 segments

const TabbarIndicator = ({ activeTab }: Props) => {
  const translateX = useSharedValue(0);
  console.log("activeTab:", activeTab);

  useEffect(() => {
    // Get the x position of the active tab icon
    const tabIndexMap: { [key: string]: number } = {
      search: 0,
      favorites: 1,
      index: 2,
      basket: 3,
      profile: 4,
    };
    // Get the index of the active tab, default to 0 if not found
    const targetIndex = tabIndexMap[activeTab] ?? 0;
    // Calculate the target position based on the index
    const targetPos = targetIndex * segmentWidth;
    // Animate to the new position using a spring animation
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
