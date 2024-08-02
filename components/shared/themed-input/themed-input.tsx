import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";
import { primaryOne, textColor } from "@/constants/colors";

import Icons from "@/components/shared/icons/icons";
import Poppins from "@/constants/font";

interface ThemedInputProps extends TextInputProps {
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  label?: string;
  hasError?: boolean;
  style?: any;
}

const ThemedInput = ({
  placeholder,
  style,
  leftIcon,
  rightIcon,
  label,
  hasError,
  ...props
}: ThemedInputProps) => {
  const [rightIconName, setRightIconName] = React.useState(rightIcon);
  const [isFocused, setIsFocused] = React.useState(false);

  console.log("Right Icon", rightIconName);

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];

    if (IconComponent) {
      return (
        <IconComponent
          style={{ color: hasError ? "red" : primaryOne }}
          size={24}
          onPress={() => {
            if (iconName === "EyeOffIcon") {
              setRightIconName("EyeIcon");
            }
            if (iconName === "EyeIcon") {
              setRightIconName("EyeOffIcon");
            }
          }}
        />
      );
    }

    console.log("Not Found Icon");
    return null;
  };

  return (
    <View style={[styles.inputView]}>
      {label && <Text style={styles.text}>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: isFocused ? primaryOne : "transparent",
            borderWidth: 2,
            ...style,
          },
        ]}
      >
        {leftIcon && renderIcon(leftIcon)}
        <TextInput
          style={[
            styles.textInput,
            {
              paddingLeft: leftIcon ? 15 : 0,
              paddingRight: rightIcon ? 15 : 0,
            },
          ]}
          selectionColor={primaryOne}
          placeholder={placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={rightIconName === "EyeOffIcon"}
          {...props}
        />

        {rightIcon && renderIcon(rightIconName)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    gap: 4,

    overflow: "hidden",
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 10,
    display: "flex",
    borderWidth: 1,
    height: 52,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",
  },
  text: {
    color: textColor,
    fontFamily: Poppins.Regular,
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: 12,
  },
  textInput: {
    flex: 1,
    fontFamily: Poppins.Regular,
    fontSize: 16,
    paddingTop: 6,
    color: textColor,
  },
});

export default ThemedInput;
