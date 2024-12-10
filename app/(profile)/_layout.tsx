import React from "react";
import { Stack, useRouter } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import {
  primaryOne,
  secondaryOne,
  secondaryThree,
  secondaryTwo,
} from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import ThemedText from "@/components/shared/themed-text/themed-text";
import ProfileHeader from "@/components/shared/profile/profile-header";

const Layout = () => {
  return (
    <RootSiblingParent>
      <Stack
        initialRouteName="index"
        screenOptions={{
          animation: "slide_from_right",
          gestureDirection: "horizontal",
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => {
              return <ProfileHeader title="Profilim" />;
            },
          }}
        />
        <Stack.Screen
          name="personal-info"
          options={{
            header: () => {
              return <ProfileHeader title="Hesabım" />;
            },
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            header: () => {
              return <ProfileHeader title="Bildirimler" />;
            },
          }}
        />
        <Stack.Screen
          name="payment-methods"
          options={{
            header: ({ navigation }) => {
              console.log("navigation", navigation);
              return <ProfileHeader title="Ödeme Yöntemleri" />;
            },
          }}
        />
        <Stack.Screen
          name="edit-profile"
          options={{
            header: ({ navigation }) => {
              const page = navigation
                .getState()
                .routes.find((r) => r.name === "edit-profile");
              console.log("page", page);
              return <ProfileHeader title={page?.params["title"] || ""} />;
            },
          }}
        />
      </Stack>
    </RootSiblingParent>
  );
};

export default Layout;
