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
import HeaderSearch from "@/components/header/header-search";
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
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: 60,
                    gap: 10,

                    width: "100%",
                  }}
                >
                  <IndexHeaderLogo width={36} height={36} />
                  <View style={tabStyles.tabIcon}>
                    <Text style={tabStyles.tabTitle}>Hoşgeldiniz</Text>
                  </View>
                </View>
                <HeaderSearch />
              </View>
            );
          },

          tabBarIcon: ({ color, focused }) => (
            <View style={tabStyles.tabBarIconStyle}>
              <TabBarIcon name='compass' color={focused ? green : secondary} />
              <Text style={{ color: focused ? green : secondary }}>Keşfet</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Ara",
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <HeaderSearch />
              </View>
            );
          },
          tabBarIcon: ({ color, focused }) => (
            <View style={tabStyles.tabBarIconStyle}>
              <TabBarIcon name='search' color={focused ? green : secondary} />
              <Text style={{ color: focused ? green : secondary }}>Ara</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: "Favoriler",
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <HeaderSearch />
              </View>
            );
          },

          tabBarIcon: ({ color, focused }) => (
            <View style={tabStyles.tabBarIconStyle}>
              <TabBarIcon name='heart' color={focused ? green : secondary} />
              <Text style={{ color: focused ? green : secondary }}>
                Favoriler
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profil",
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <HeaderSearch />
              </View>
            );
          },
          tabBarIcon: ({ color, focused }) => (
            <View style={tabStyles.tabBarIconStyle}>
              <TabBarIcon name='user' color={focused ? green : secondary} />
              <Text style={{ color: focused ? green : secondary }}>Profil</Text>
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
    height: 80,
  },
  headerWrapper: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    backgroundColor: "white",
    paddingTop: 20,
  },
  tabBarIconStyle: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "100%",
    height: "100%",
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
