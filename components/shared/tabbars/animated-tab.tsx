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

const smallSize = 30;
const largeSize = 57;

export const tabStyles = StyleSheet.create({
  tabBarIconStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
    width: smallSize,
    height: smallSize,
  },
});

const AnimatedTab = ({
  children,
}: {
  children: (isFocused: boolean) => JSX.Element;
}) => {
  const isFocused = useIsFocused();

  const isFocushed = useIsFocused();

  const marginBottom = useSharedValue(isFocushed ? 40 : 0);
  const backgroundColor = useSharedValue(false);
  const width = useSharedValue(isFocushed ? largeSize : smallSize);
  const height = useSharedValue(isFocushed ? largeSize : smallSize);

  // Animate on focus change
  React.useEffect(() => {
    marginBottom.value = withTiming(isFocushed ? 40 : 0, {
      duration: 200,
      easing: Easing.linear,
    });
    width.value = withTiming(isFocushed ? largeSize : smallSize, {
      duration: 200,
      easing: Easing.linear,
    });
    height.value = withTiming(isFocushed ? largeSize : smallSize, {
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