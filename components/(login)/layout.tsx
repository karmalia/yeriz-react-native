import React from "react";

import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  white,
} from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, View, ScrollView, Image } from "react-native";
import Icons from "../shared/icons/icons";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
import { StatusBar } from "expo-status-bar";
import ThemedStatusBar from "../shared/themed-status-bar/themed-status-bar";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const { keyboardState } = useKeyboardState();
  return (
    <LinearGradient
      style={[
        styles.gradient,
        {
          gap: keyboardState ? 0 : 40,
        },
      ]}
      colors={[white, secondaryFour]}
    >
      <ThemedStatusBar />

      <Icons.BizYerizLogo
        style={{
          marginHorizontal: "auto",
        }}
      />

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
