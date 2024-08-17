import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";
import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  secondaryTwo,
  textColor,
} from "@/constants/colors";

import Icons from "@/components/shared/icons/icons";
import Poppins from "@/constants/font";
import { useController } from "react-hook-form";

interface ThemedInputProps extends TextInputProps {
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  label?: string;
  hasError?: string | undefined;
  style?: any;
  control?: any;
  name?: string;
  value?: string;
}

const ThemedInput = ({
  placeholder,
  style,
  leftIcon,
  rightIcon,
  label,
  hasError,
  control,
  ...props
}: ThemedInputProps) => {
  const [rightIconName, setRightIconName] = React.useState(rightIcon);
  const [isFocused, setIsFocused] = React.useState(false);

  const field = control
    ? useController({
        name: props.name || "",
        control: control,
        defaultValue: props.value || "",
      }).field
    : { value: props.value || "", onChange: props.onChangeText || (() => {}) };

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
            borderColor:
              isFocused && hasError
                ? "red"
                : isFocused && !hasError
                ? primaryOne
                : "transparent",
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
          selectionColor={secondaryFour}
          placeholder={placeholder}
          value={field?.value || ""}
          onChangeText={field?.onChange || (() => {})}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={rightIconName === "EyeOffIcon"}
          {...props}
        />

        {rightIcon && renderIcon(rightIconName)}
      </View>
      {hasError && (
        <Text style={{ color: "red", fontSize: 12 }}>{hasError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "100%",

    gap: 4,
    paddingTop: 4,
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
