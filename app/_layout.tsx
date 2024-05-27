import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from "@/components/Themed";
import Splash from "@/components/splash/Splash";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "login",
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    ...FontAwesome.font,
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  useEffect(() => {
    async function prepare() {
      if (loaded) {
        console.log("Loaded fonts");
        setAppIsReady(true);
      }
    }

    prepare();
  }, [loaded]);

  if (!appIsReady) {
    return null;
  }

  onLayoutRootView();
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='(login)'>
        <Stack.Screen name='(login)' options={{ headerShown: false }} />
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='map-modal' options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
