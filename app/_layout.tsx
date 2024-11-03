import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import ClientProvider from "@/providers/query-client";
import { Text, View } from "react-native";
import LoginHeader from "@/components/modals/login/login-header";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    MulishBlack: require("@/assets/fonts/Mulish/Mulish-Black.ttf"),
    MulishBlackItalic: require("@/assets/fonts/Mulish/Mulish-BlackItalic.ttf"),
    MulishBold: require("@/assets/fonts/Mulish/Mulish-Bold.ttf"),
    MulishBoldItalic: require("@/assets/fonts/Mulish/Mulish-BoldItalic.ttf"),
    MulishExtraBold: require("@/assets/fonts/Mulish/Mulish-ExtraBold.ttf"),
    MulishExtraBoldItalic: require("@/assets/fonts/Mulish/Mulish-ExtraBoldItalic.ttf"),
    MulishExtraLight: require("@/assets/fonts/Mulish/Mulish-ExtraLight.ttf"),
    MulishExtraLightItalic: require("@/assets/fonts/Mulish/Mulish-ExtraLightItalic.ttf"),
    MulishItalic: require("@/assets/fonts/Mulish/Mulish-Italic.ttf"),
    MulishLight: require("@/assets/fonts/Mulish/Mulish-Light.ttf"),
    MulishLightItalic: require("@/assets/fonts/Mulish/Mulish-LightItalic.ttf"),
    MulishMedium: require("@/assets/fonts/Mulish/Mulish-Medium.ttf"),
    MulishMediumItalic: require("@/assets/fonts/Mulish/Mulish-MediumItalic.ttf"),
    MulishRegular: require("@/assets/fonts/Mulish/Mulish-Regular.ttf"),
    MulishSemiBold: require("@/assets/fonts/Mulish/Mulish-SemiBold.ttf"),
    MulishSemiBoldItalic: require("@/assets/fonts/Mulish/Mulish-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ClientProvider>
        <StatusBar backgroundColor="white" />

        <RootLayoutNav />
      </ClientProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  return (
    <Stack initialRouteName="(home)">
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="modals/map-modal"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modals/listcards-modal"
        options={{
          headerShown: false,
          headerTitle: "",

          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modals/login-modal"
        options={{
          headerShown: true,
          header: () => <LoginHeader />,

          presentation: "modal",
        }}
      />
    </Stack>
  );
}
