import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { primaryOne } from "@/constants/colors";
import Constants from "expo-constants";
import ThemedText from "../themed-text/themed-text";
import Mulish from "@/constants/font";

type DefaultTabHeaderProps = {
  title: string;
  style?: any;
  textStyle?: any;
};

const DefaultTabHeader = ({
  title,
  style,
  textStyle,
}: DefaultTabHeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: primaryOne,
        paddingTop: Constants.statusBarHeight,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <ThemedText
        style={{
          fontSize: 20,
          fontWeight: "400",
          color: "white",
          fontFamily: Mulish.Regular,
          letterSpacing: 0.5,
          ...textStyle,
        }}
      >
        {title}
      </ThemedText>
    </View>
  );
};

export default DefaultTabHeader;
