import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { primaryThree, secondaryFour } from "@/constants/colors";
type Props = {};

const LoginLayout = (props: Props) => {
  const navigator = useNavigation();

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          headerBlurEffect: "light",
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="resetPassword" />
      <Stack.Screen name="forgotPassword" />
    </Stack>
  );
};

export default LoginLayout;
