import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { primaryThree, secondaryFour } from "@/constants/colors";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
type Props = {};

const Layout = (props: Props) => {
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
              headerTitle: "Giriş Yap",
              headerShown: true,
              headerBlurEffect: "light",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              headerShown: true,
              headerTitle: "Kayıt Ol",
              headerBlurEffect: "light",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="enter-code"
            options={{
              headerShown: true,
              headerTitle: "Doğrulama Kodu",
              headerBlurEffect: "light",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="create-password"
            options={{
              headerShown: true,
              headerTitle: "Şifre Oluştur",
              headerBlurEffect: "light",
              headerTransparent: true,
            }}
          />
          <Stack.Screen name="resetPassword" />
          <Stack.Screen
            name="forgot-password"
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
