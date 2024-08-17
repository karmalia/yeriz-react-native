import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
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
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    lineHeight: 20,
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
