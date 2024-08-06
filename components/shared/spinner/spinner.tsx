import { primaryOne, secondaryOne } from "@/constants/colors";
import { transform } from "@babel/core";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  withSequence,
} from "react-native-reanimated";
import Icons from "../icons/icons";

const AnimatedView = Animated.createAnimatedComponent(View);

const AnimatedSpinner = ({
  variant = "primary",
  color = primaryOne,
}: {
  variant: "primary" | "secondary";
  color: string;
}) => {
  const duration = 500,
    easing = Easing.linear;
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: 50,
      width: 50,
      alignItems: "center",
      justifyContent: "center",
      transform: [
        {
          rotate: withRepeat(
            withSequence(
              withTiming(360 + "deg", {
                duration: 1000,
                easing,
              }),
              withTiming(0 + "deg", { duration: 1000, easing })
            ),
            -1,
            false
          ),
        },
      ],
    };
  });

  return (
    <AnimatedView style={[animatedStyle]}>
      {variant === "primary" ? (
        <Icons.SpinnerIconPrimary
          style={{
            color,
          }}
        />
      ) : (
        <Icons.SpinnerIconSecondary
          style={{
            color,
          }}
        />
      )}
    </AnimatedView>
  );
};

export default AnimatedSpinner;
