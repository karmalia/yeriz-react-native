import {
  primaryOne,
  primaryTwo,
  secondaryOne,
  secondaryTwo,
  tertiaryOne,
  tertiaryTwo,
  white,
} from "@/constants/colors";
import Mulish from "@/constants/font";
import { ButtonTextSizes } from "@/constants/fontsizes";
import React, { forwardRef } from "react";
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native";

type ThemedButtonProps = {
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "tertiary";
  outline?: boolean;
  style?: any;
  children: React.ReactNode;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const useStyles = (
  variant: ThemedButtonProps["variant"],
  size: ThemedButtonProps["size"],
  outline: boolean | undefined,
  isFocused: boolean
) => {
  let buttonStyles = {};
  const { width, height } = useWindowDimensions();
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

  return StyleSheet.create({
    button: {
      borderRadius: 5,
      borderWidth: 1,
      height: height * 0.075,
      maxHeight: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...buttonStyles,
    },
  });
};

export default forwardRef(function ThemedButton(
  props: ThemedButtonProps,
  ref: any
) {
  const [isFocused, setIsFocused] = React.useState(false);
  const {
    size,
    variant,
    outline,
    children,
    style,
    isLoading,
    onPress,
    disabled,
  } = props;

  const styles = useStyles(variant, size, outline, isFocused);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.button,

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
      disabled={disabled}
      ref={ref}
    >
      {children}
    </TouchableOpacity>
  );
});
