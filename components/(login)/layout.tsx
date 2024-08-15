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
          gap: keyboardState ? 20 : 40,
        },
      ]}
      colors={[white, secondaryFour]}
    >
      <ThemedStatusBar />
      <View
        style={{
          height: 193,
          width: "100%",
          paddingHorizontal: "auto",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="contain"
          source={require("@/assets/images/biz-yeriz-png.png")}
        />
      </View>

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
