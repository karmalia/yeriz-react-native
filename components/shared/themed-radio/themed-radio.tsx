import { View, Text, TextInputProps, StyleSheet } from "react-native";

import RadioButton from "react-native-animated-radio-button";
import React, { useState } from "react";
import { primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";

interface ThemedRadioProps {
  label?: string;
  hasError?: boolean;
  height?: number;
  fontSize?: number;
  color?: string;
  isSelected: boolean;
  onPress: (id: string | number) => void;
  id: string | number;
}

const ThemedRadio = (props: ThemedRadioProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <RadioButton
        style={{
          borderRadius: 16,
          borderWidth: 3,
          borderColor: primaryOne,
          height: 24,
          width: 24,
        }}
        innerBackgroundColor={primaryOne}
        innerContainerStyle={{ height: 12, width: 12, borderRadius: 10 }}
        onPress={(isActive: boolean) => {
          props.onPress(props.id);
        }}
        isActive={props.isSelected}
      />
      <Text
        style={{
          height: props.height || 25,
          marginLeft: 10,
          display: "flex",
          textAlignVertical: "center",
          fontFamily: Mulish.Regular,
          fontSize: props.fontSize || 16,
          color: props.color || primaryOne,
        }}
      >
        {props.label || "Test"}
      </Text>
    </View>
  );
};

export default ThemedRadio;
