import React from "react";

import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  white,
} from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, View } from "react-native";
import Icons from "../shared/icons/icons";

import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { StatusBar } from "expo-status-bar";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
      }}
    >
      <LinearGradient style={[styles.gradient]} colors={[white, secondaryFour]}>
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          style={{
            width: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icons.BizYerizLogo
              style={{
                marginHorizontal: "auto",
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
  },
});
