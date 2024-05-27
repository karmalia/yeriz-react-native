import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { orange } from "@/constants/Colors";
import { useNavigation } from "expo-router";

type LoginButtonProps = {
  index: number;
  text: string;
  navigate: {
    tab: string;
    screen: string;
  };
};

const LoginButton = ({ index, text, navigate }: LoginButtonProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      key={index}
      style={[
        styles.btn,
        {
          backgroundColor: index == 1 ? orange : "white",
        },
      ]}
      onPress={() =>
        navigation.navigate(navigate.tab, { screen: navigate.screen })
      }
    >
      <Text style={[styles.btntext, { color: index == 0 ? orange : "white" }]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: orange,
  },
  btntext: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Poppins",
  },
});

export default LoginButton;
