import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { natural30, primaryOne, secondaryOne } from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import HeaderSearch from "@/components/header/header-search";
import Icons from "@/components/shared/icons/icons";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primaryOne,
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
        name="index"
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

                    backgroundColor: "white",
                    width: "100%",
                  }}
                >
                  <Icons.KesfetLogo width={30} height={30} />
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
              <TabBarIcon
                name="compass"
                color={focused ? primaryOne : secondaryOne}
              />
              <Text style={{ color: focused ? primaryOne : secondaryOne }}>
                Keşfet
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
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
              <TabBarIcon
                name="search"
                color={focused ? primaryOne : secondaryOne}
              />
              <Text style={{ color: focused ? primaryOne : secondaryOne }}>
                Ara
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
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
              <TabBarIcon
                name="heart"
                color={focused ? primaryOne : secondaryOne}
              />
              <Text style={{ color: focused ? primaryOne : secondaryOne }}>
                Favoriler
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
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
              <TabBarIcon
                name="user"
                color={focused ? primaryOne : secondaryOne}
              />
              <Text style={{ color: focused ? primaryOne : secondaryOne }}>
                Profil
              </Text>
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
    backgroundColor: "white",
  },
  tabBarStyle: {
    backgroundColor: "white",
    height: 80,
  },
  headerWrapper: {
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  tabBarIconStyle: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    gap: 5,
    width: "100%",
    height: "100%",
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: natural30,
    backgroundColor: "white",
  },
  tabIcon: {
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
