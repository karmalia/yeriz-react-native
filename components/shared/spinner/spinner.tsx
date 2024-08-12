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
  const rotate = useSharedValue(0);
  React.useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -2,
      false
    );
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: 50,
      width: 50,
      alignItems: "center",
      justifyContent: "center",
      transform: [
        {
          rotateZ: `${rotate.value}deg`,
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
