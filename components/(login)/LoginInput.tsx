import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { orange, textColor } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

type LoginInputProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  leftIcon?: string;
  rightIcon?: string;
  label?: string;
  required?: boolean;
};

const LoginInput = (props: LoginInputProps) => {
  const [rightIconName, setRightIconName] = React.useState(props.rightIcon);
  return (
    <View style={styles.inputView}>
      {props.label && <Text style={styles.text}>{props.label}</Text>}
      <View style={styles.inputWrapper}>
        {props.leftIcon && (
          <FontAwesome
            name={props.leftIcon as any}
            style={{
              color: orange,
              backgroundColor: "white",
            }}
            size={24}
          />
        )}
        <TextInput
          style={[
            styles.textInput,
            {
              paddingLeft: props.leftIcon ? 15 : 0,
              paddingRight: props.rightIcon ? 15 : 0,
            },
          ]}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChange}
          secureTextEntry={props.secureTextEntry}
        />

        {props.leftIcon && (
          <FontAwesome
            name={rightIconName as any}
            style={{
              color: orange,
            }}
            size={24}
            onPress={(e: any) => {
              console.log("Element", e.target);
              if (rightIconName === "eye") {
                setRightIconName("eye-slash");
              }
              if (rightIconName === "eye-slash") {
                setRightIconName("eye");
              }
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    gap: 2,
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",
  },
  text: {
    color: textColor,
    fontSize: 12,

    fontFamily: "Poppins",
  },
  textInput: {
    height: 52,
    flex: 1,
    backgroundColor: "white",
    fontSize: 16,
  },
});

export default LoginInput;
