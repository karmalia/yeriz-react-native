import {
  primaryOne,
  primaryTwo,
  secondaryOne,
  secondaryTwo,
  tertiaryOne,
  tertiaryTwo,
  white,
} from "@/constants/colors";
import Poppins from "@/constants/font";
import { ButtonTextSizes } from "@/constants/fontsizes";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

type ThemedButtonProps = {
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "tertiary";
  outline?: boolean;
  style: any;
  children: React.ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
};

enum TextVariant {
  primary = primaryOne,
  secondary = secondaryOne,
  tertiary = tertiaryOne,
}

function getButtonStyles(
  variant: "primary" | "secondary" | "tertiary",
  size: "small" | "medium" | "large",
  outline: boolean | undefined,
  isFocused: boolean
) {
  let buttonStyles = {};
  switch (variant) {
    case "primary":
      if (outline) {
        buttonStyles = {
          backgroundColor: !isFocused ? white : primaryOne,
          borderColor: primaryOne,
        };
        break;
      }
      buttonStyles = {
        backgroundColor: !isFocused ? primaryOne : primaryTwo,
        borderColor: !isFocused ? primaryOne : primaryTwo,
      };
      break;
    case "secondary":
      if (outline) {
        buttonStyles = {
          backgroundColor: !isFocused ? white : secondaryOne,
          borderColor: secondaryOne,
        };
        break;
      }
      buttonStyles = {
        backgroundColor: !isFocused ? secondaryOne : secondaryTwo,
        borderColor: !isFocused ? secondaryOne : secondaryTwo,
      };
      break;
    case "tertiary":
      if (outline) {
        buttonStyles = {
          backgroundColor: !isFocused ? white : tertiaryOne,
          borderColor: tertiaryOne,
        };
        break;
      }
      buttonStyles = {
        backgroundColor: !isFocused ? tertiaryOne : tertiaryTwo,
        borderColor: !isFocused ? tertiaryOne : tertiaryOne,
      };
      break;
    default:
      buttonStyles = {
        backgroundColor: "transparent",
        borderColor: "black",
      };
      break;
  }

  switch (size) {
    case "small":
      buttonStyles = {
        ...buttonStyles,
        paddingVertical: 12,
        fontSize: ButtonTextSizes.small,
      };
      break;
    case "medium":
      buttonStyles = {
        ...buttonStyles,
        paddingVertical: 16,
        fontSize: ButtonTextSizes.medium,
      };
      break;
    case "large":
      buttonStyles = {
        ...buttonStyles,
        paddingVertical: 20,
        fontSize: ButtonTextSizes.large,
      };
  }

  return buttonStyles;
}

export default function ThemedButton({
  size,
  variant,
  outline,
  children,
  style,
  isLoading,
  onPress,
}: ThemedButtonProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.button,
        {
          ...getButtonStyles(variant, size, outline, isFocused),
        },
        {
          ...style,
        },
      ]}
      onPressIn={() => {
        setIsFocused(true);
      }}
      onPressOut={() => {
        setIsFocused(false);
      }}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            textAlign: "center",
            color: outline && !isFocused ? TextVariant[variant] : "white",
          },
        ]}
      >
        {isLoading ? "o" : children}
      </Text>
    </TouchableOpacity>
  );
}

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
