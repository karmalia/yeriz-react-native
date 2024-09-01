import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Icons from "@/components/shared/icons/icons";
import { primaryOne } from "@/constants/colors";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";
type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <GestureHandlerRootView
      style={[
        styles.loginHeader,
        {
          paddingTop: Constants.statusBarHeight,
          borderWidth: 4,
          borderColor: "red",
          backgroundColor: "white",
        },
      ]}
    >
      <TouchableOpacity onPress={() => router.navigate("/(home)/")}>
        <Icons.CloseIcon
          width={24}
          height={24}
          style={{
            color: primaryOne,
          }}
        />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  loginHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 80,

    paddingHorizontal: 20,
  },
});
