import React, { forwardRef, useRef } from "react";

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
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import useKeyboardStore from "@/stores/keyboardStore";

const KeyboardDetecter = () => {
  const keyboardRef = useRef();
  useCheckIfElementCoveredByKeyboard(keyboardRef);
  return (
    <View
      ref={keyboardRef as any}
      style={{
        height: 1,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "red",
      }}
    />
  );
};

const initialLogoHeight = 150;

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const { isCovered } = useKeyboardStore();
  const logoHeight = useSharedValue(initialLogoHeight);

  React.useEffect(() => {
    if (isCovered.on) {
      let adjustedHeight = Math.floor(initialLogoHeight - isCovered.space);
      logoHeight.value = withTiming(
        Math.abs(adjustedHeight > 100 ? adjustedHeight : 0),
        {
          duration: 200,
          easing: Easing.linear,
        }
      );
    } else {
      logoHeight.value = withTiming(150, {
        duration: 200,

        easing: Easing.linear,
      });
    }
  }, [isCovered.on]);

  const logoHeightStyle = useAnimatedStyle(() => {
    return {
      height: logoHeight.value,
    };
  });

  return (
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
          <Animated.View
            style={[
              {
                height: isCovered.on ? 100 : 150,
              },
              logoHeightStyle,
            ]}
          >
            <Icons.BizYerizLogo
              width={isCovered.on ? 100 : 150}
              height={"100%"}
              style={{
                marginHorizontal: "auto",
              }}
            />
          </Animated.View>
        </View>
        <View
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          {children}
          <KeyboardDetecter />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
    display: "flex",
  },
});
