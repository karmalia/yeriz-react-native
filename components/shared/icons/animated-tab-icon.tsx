import React from "react";

import { View, Text, StyleSheet } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Icons from "./icons";
import {
  natural30,
  natural40,
  primaryOne,
  primaryThree,
  secondaryOne,
} from "@/constants/colors";
import Animated from "react-native-reanimated";
import { useFocusEffect } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

export const tabStyles = StyleSheet.create({
  tabBarIconStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 100,
    width: "100%",
  },
});

export const AnimatedTabIcon = ({ focused, children }) => {
  const isFocushed = useIsFocused();

  const size = useSharedValue(isFocushed ? 1.2 : 1);
  const marginBottom = useSharedValue(isFocushed ? 50 : 0);
  const backgroundColor = useSharedValue(false);

  // Animate on focus change
  React.useEffect(() => {
    size.value = withTiming(isFocushed ? 1.5 : 1, { duration: 300 });

    marginBottom.value = withTiming(isFocushed ? 50 : 0, { duration: 300 });
    backgroundColor.value = isFocushed ? true : false;
  }, [isFocushed]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: size.value }],
      marginBottom: marginBottom.value,
      backgroundColor: backgroundColor.value ? primaryOne : "transparent",
    };
  });

  return (
    <Animated.View style={[tabStyles.tabBarIconStyle, animatedStyle]}>
      {children}
    </Animated.View>
  );
};
