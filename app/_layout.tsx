import { useFonts } from "expo-font";
import { router, Stack, usePathname, useRouter } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import ClientProvider from "@/providers/query-client";
import { View } from "react-native";
import LoginHeader from "@/components/modals/login/login-header";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import FilterOrderBar from "@/components/shared/action-bars/filter-order-bar";
import { primaryOne, secondaryThree } from "@/constants/colors";
import Mulish from "@/constants/font";
import { useGetAllFilters } from "@/api/queries/filters/get-all-filters";
import useFilterStore from "@/stores/filterStore";

import { LinearGradient } from "expo-linear-gradient";
import Icons from "@/components/shared/icons/icons";

import useGoogleMapStore from "@/stores/googleMapStore";
import { useGetReverseGeolocation } from "@/api/queries/geocoding/get-reverse-geocoding";
import { retriveAdress } from "@/lib/utils/retrive-address";
import AddressBar from "@/components/header/address-bar";
import Constants from "expo-constants";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { StatusBar } from "expo-status-bar";
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
        <KeyboardProvider>
          <RootLayoutNav />
        </KeyboardProvider>
      </ClientProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const pathname = usePathname();
  const { data, isLoading, isError } = useGetAllFilters();
  const { initializeFilters } = useFilterStore();

  useLayoutEffect(() => {
    if (pathname !== "/(home)") {
      setTimeout(() => {
        router.navigate("/(home)");
      }, 500);
    }
  }, []);
  useEffect(() => {
    if (data) {
      initializeFilters(data);
    }
  }, [isLoading]);

  if (isLoading || isError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["white", secondaryThree]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <Icons.BizYerizLogo width={150} height={150} />
      </View>
    );
  }

  if (data) {
    return (
      <>
        <StatusBar style="light" />
        <Stack initialRouteName="(home)">
          <Stack.Screen name="(login)" options={{ headerShown: false }} />
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
          <Stack.Screen name="(help)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="modals/map-modal"
            options={{
              header: () => (
                <View
                  style={{
                    paddingTop: Constants.statusBarHeight,
                  }}
                >
                  <AddressBar />
                </View>
              ),
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="modals/kitchens-modal"
            options={{
              headerShown: true,
              headerTitle: "Mutfaklar",
              headerTitleStyle: {
                fontFamily: "Mulish-Bold",
                fontSize: 20,
              },
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: primaryOne,
              },
              headerTintColor: "white",
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
          <Stack.Screen
            name="modals/filtered-restaurants"
            options={{
              headerShown: true,
              headerTitle: "Filtrelenmiş Restoranlar",
              headerTitleStyle: {
                fontFamily: Mulish.Regular,
                fontSize: 20,
              },
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: primaryOne,
              },
              headerTintColor: "white",
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="modals/company-modal"
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack>
        <FilterOrderBar />
      </>
    );
  }

  return null;
}
