import React, { forwardRef } from "react";

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
import useCheckIfElementCoveredByKeyboard from "@/lib/utils/useCheckIfElementCoveredByKeyboard";

const KeyboardDetecter = forwardRef((props, ref) => {
  return (
    <View ref={ref} style={{ height: 1, backgroundColor: "transparent" }} />
  );
});

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const touchCheckRef = React.useRef(null);
  const touchOn = useCheckIfElementCoveredByKeyboard(touchCheckRef);
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
              borderWidth: 1,
            }}
          >
            <Icons.BizYerizLogo
              width={touchOn ? 100 : 150}
              height={touchOn ? 100 : 150}
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
            <KeyboardDetecter ref={touchCheckRef} />
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
