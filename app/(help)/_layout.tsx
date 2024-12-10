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
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const router = useRouter();
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
            header: ({ navigation }) => {
              return <ProfileHeader title="Yardım" />;
            },
          }}
        />
        <Stack.Screen
          name="about-order"
          options={{
            header: ({ navigation }) => {
              return <ProfileHeader title="Siparişim Hakkında" />;
            },
          }}
        />
        <Stack.Screen
          name="how-it-works"
          options={{
            header: ({ navigation }) => {
              return <ProfileHeader title="Bizyeriz" />;
            },
          }}
        />
        <Stack.Screen
          name="join-us"
          options={{
            header: ({ navigation }) => {
              return <ProfileHeader title="Bize Katılın" />;
            },
          }}
        />
      </Stack>
    </RootSiblingParent>
  );
};

export default Layout;
