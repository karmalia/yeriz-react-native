import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedTabIcon } from "../icons/animated-tab-icon";
import Icons from "../icons/icons";
import { useIsFocused } from "@react-navigation/native";
import { primaryOne, secondaryOne } from "@/constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

export const tabStyles = StyleSheet.create({
  tabBarIconStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
    flexDirection: "column",
    gap: 5,
    width: 75,
    height: 75,
  },
});

const AnimatedTab = ({
  children,
}: {
  children: (isFocused: boolean) => JSX.Element;
}) => {
  const isFocused = useIsFocused();

  const isFocushed = useIsFocused();

  const marginBottom = useSharedValue(isFocushed ? 50 : 0);
  const backgroundColor = useSharedValue(false);
  const width = useSharedValue(isFocushed ? 75 : 100);
  const height = useSharedValue(isFocushed ? 75 : 75);

  // Animate on focus change
  React.useEffect(() => {
    marginBottom.value = withTiming(isFocushed ? 60 : 0, {
      duration: 200,
      easing: Easing.linear,
    });
    width.value = withTiming(isFocushed ? 75 : 100, {
      duration: 200,
      easing: Easing.linear,
    });
    height.value = withTiming(isFocushed ? 75 : 75, {
      duration: 200,
      easing: Easing.linear,
    });
    backgroundColor.value = isFocushed ? true : false;
  }, [isFocushed]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginBottom: marginBottom.value,
      backgroundColor: backgroundColor.value ? primaryOne : "transparent",
      width: width.value,
      height: height.value,
    };
  });

  return (
    <Animated.View style={[tabStyles.tabBarIconStyle, animatedStyle]}>
      {children(isFocused)}
    </Animated.View>
  );
};

export default AnimatedTab;
