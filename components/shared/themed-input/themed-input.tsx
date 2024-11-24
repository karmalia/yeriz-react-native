import React, { forwardRef, Ref } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import {
  primaryOne,
  secondaryFour,
  secondaryThree,
  secondaryTwo,
  textColor,
} from "@/constants/colors";

import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { useController } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ThemedInputProps extends TextInputProps {
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  rightIconOnPress?: () => void | null;
  label?: string;
  hasError?: string | undefined;
  style?: any;
  control?: any;
  name?: string;
  value?: string;
}

const ThemedInput = forwardRef<TextInput, ThemedInputProps>(
  (
    {
      placeholder,
      style,
      leftIcon,
      rightIcon,
      label,
      hasError,
      control,
      rightIconOnPress,
      ...props
    }: ThemedInputProps,
    ref: Ref<TextInput>
  ) => {
    const [rightIconName, setRightIconName] = React.useState(rightIcon);
    const [isFocused, setIsFocused] = React.useState(false);

    const field = control
      ? useController({
          name: props.name || "",
          control: control,
          defaultValue: props.value || "",
        }).field
      : {
          value: props.value || "",
          onChange: props.onChangeText || (() => {}),
        };

    const renderIcon = (iconName, onClick) => {
      const IconComponent = Icons[iconName];

      if (IconComponent) {
        return (
          <TouchableOpacity onPress={onClick && onClick}>
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
          </TouchableOpacity>
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
          {leftIcon && renderIcon(leftIcon, null)}
          <TextInput
            ref={ref}
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

          {rightIcon && renderIcon(rightIconName, rightIconOnPress)}
        </View>
        {hasError && (
          <Text style={{ color: "red", fontSize: 12 }}>{hasError}</Text>
        )}
      </View>
    );
  }
);

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
    fontFamily: Mulish.Regular,
    fontSize: 12,
  },
  textInput: {
    flex: 1,
    fontFamily: Mulish.Regular,
    fontSize: 16,
    color: textColor,
  },
});

export default ThemedInput;
