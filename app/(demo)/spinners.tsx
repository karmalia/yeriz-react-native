import { View, Text } from "react-native";
import React from "react";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import TestAnimate from "@/components/test-animate/test-animate";
import {
  primaryOne,
  primaryThree,
  primaryTwo,
  secondaryOne,
  secondaryThree,
  secondaryTwo,
} from "@/constants/colors";

type Props = {};

const Spinners = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
        Spinner
      </Text>
      <AnimatedSpinner variant="primary" color={primaryOne} />
      <AnimatedSpinner variant="primary" color={primaryTwo} />
      <AnimatedSpinner variant="primary" color={primaryThree} />
      <AnimatedSpinner variant="secondary" color={secondaryOne} />
      <AnimatedSpinner variant="secondary" color={secondaryTwo} />
      <AnimatedSpinner variant="secondary" color={secondaryThree} />
    </View>
  );
};

export default Spinners;
