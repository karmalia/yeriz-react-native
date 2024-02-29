import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import Colors, { green, secondary, textColor } from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import IndexHeaderLogo from "@/assets/images/kesfet-logo.svg";
import LocationLogo from "@/assets/images/location-on.svg";
import { Text, View } from "@/components/Themed";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        headerStyle: tabStyles.headerStyle,
        tabBarStyle: tabStyles.tabBarStyle,
        headerLeftContainerStyle: {
          paddingLeft: 15,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Keşfet",

          headerTitle(props) {
            return <Text style={tabStyles.tabTitle}>Keşfet</Text>;
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='compass' color={focused ? green : secondary} />
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <View style={tabStyles.tabIcon}>
              <IndexHeaderLogo width={36} height={36} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='filter'
        options={{
          title: "Filtrele",
          headerTitle(props) {
            return <Text style={tabStyles.tabTitle}>Filtrele</Text>;
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='search' color={focused ? green : secondary} />
          ),
          headerLeft: () => (
            <View style={tabStyles.tabIcon}>
              <LocationLogo width={36} height={36} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: "Favoriler",
          headerTitle(props) {
            return <Text style={tabStyles.tabTitle}>Favoriler</Text>;
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='heart' color={focused ? green : secondary} />
          ),
          headerLeft: () => (
            <View style={tabStyles.tabIcon}>
              <IndexHeaderLogo width={36} height={36} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profil",
          headerTitle(props) {
            return <Text style={tabStyles.tabTitle}>Profil</Text>;
          },
          tabBarIcon: ({ color, focused }) => (
            <View>
              <TabBarIcon name='user' color={focused ? green : secondary} />
            </View>
          ),
          headerLeft: () => (
            <View style={tabStyles.tabIcon}>
              <IndexHeaderLogo width={36} height={36} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const tabStyles = StyleSheet.create({
  headerStyle: {
    height: 100,
  },
  tabBarStyle: {
    height: 60,
  },

  tabTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(102, 110, 128, 1)",
  },
  tabIcon: {
    height: "100%",

    justifyContent: "center",
  },
});
