import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { primaryThree, secondaryFour } from "@/constants/colors";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
type Props = {};

const Layout = (props: Props) => {
  const navigator = useNavigation();

  return (
    <RootSiblingParent>
      <GestureHandlerRootView>
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
            name="email-login"
            options={{
              headerShown: true,
              headerBlurEffect: "light",
              headerTransparent: true,
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
          <Stack.Screen
            name="forgotPassword"
            options={{
              headerShown: true,
              headerTitle: "Şifremi Unuttum",
              headerBlurEffect: "light",
              headerTransparent: true,
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </RootSiblingParent>
  );
};

export default Layout;
