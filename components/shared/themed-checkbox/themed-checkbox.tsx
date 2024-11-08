import { View, Text, TextInputProps, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import { primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";

interface ThemedCheckboxProps extends TextInputProps {
  label?: string;
  hasError?: boolean;
  height?: number;
  fontSize?: number;
  color?: string;
  value: any;
  onPress?: (value: any) => void;
  textStyles?: any;
}

const ThemedCheckbox = (props: ThemedCheckboxProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: props.height || 25,
        width: "100%",
      }}
    >
      <BouncyCheckbox
        size={props.height || 25}
        fillColor={props.color || primaryOne}
        unFillColor="#FFFFFF"
        iconStyle={{ borderColor: primaryOne, borderRadius: 5 }}
        innerIconStyle={{
          borderWidth: 2,
          borderRadius: 5,
        }}
        textStyle={{
          fontFamily: Mulish.Black,
          fontSize: props.fontSize || 16,
          color: props.color || primaryOne,
        }}
        onPress={(isChecked: boolean) => {
          if (!props.onPress) return;
          props.onPress(props.value);
        }}
      />
      <Text
        style={{
          lineHeight: props.height || 25,
          marginLeft: -10,
          display: "flex",
          fontFamily: Mulish.SemiBold,
          fontSize: props.fontSize || 18,
          color: "black",
        }}
      >
        {props.label || ""}
      </Text>
    </View>
  );
};

export default ThemedCheckbox;
