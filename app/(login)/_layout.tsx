import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
type Props = {};

const LoginLayout = (props: Props) => {
  console.log("LoginLayout");
  return (
    <Stack
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='register' />
      <Stack.Screen name='resetPassword' />
      <Stack.Screen name='forgotPassword' />
    </Stack>
  );
};

export default LoginLayout;
