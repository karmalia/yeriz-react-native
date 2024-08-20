import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React from "react";
import { primaryOne, secondaryOne, tertiaryOne } from "@/constants/colors";
import Poppins from "@/constants/font";

enum TextVariant {
  primary = primaryOne,
  secondary = secondaryOne,
  tertiary = tertiaryOne,
}
interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | undefined;
  variant?: keyof typeof TextVariant;
}

const ThemedText = ({ children, variant, style }: ThemedTextProps) => {
  return (
    <Text
      style={[
        styles.buttonText,
        {
          textAlign: "center",
          color: variant ? TextVariant[variant] : "white",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontFamily: Poppins.Regular,
  },
  primary: {
    backgroundColor: primaryOne,
    borderColor: "blue",
  },
  secondary: {
    backgroundColor: secondaryOne,
    borderColor: "green",
  },
  tertiary: {
    backgroundColor: tertiaryOne,
    borderColor: "red",
  },
});
