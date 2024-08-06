import React from "react";

import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  white,
} from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
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
      <Icons.YerizLogo width={"100%"} height={193} />

      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
    paddingTop: 60,
  },
});
