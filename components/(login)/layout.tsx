import React from "react";

import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  white,
} from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Icons from "../shared/icons/icons";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const { keyboardState } = useKeyboardState();
  return (
    <LinearGradient
      style={[
        styles.gradient,
        {
          gap: keyboardState ? 20 : 40,
        },
      ]}
      colors={[white, secondaryFour, secondaryThree]}
    >
      <Icons.YerizLogo width={158} height={193} />

      {children}
    </LinearGradient>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    gap: 40,
  },
});
