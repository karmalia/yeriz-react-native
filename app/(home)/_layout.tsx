import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { natural30, natural40, primaryOne } from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import HeaderSearch from "@/components/header/header-search";
import Icons from "@/components/shared/icons/icons";
import Constants from "expo-constants";
import { TabBars } from "@/components/shared/tabbars/tab-bars";
import { StatusBar } from "expo-status-bar";
// import { TabBarsNew } from "@/components/shared/tabbars-new/tab-bars-new";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primaryOne,
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,

        tabBarStyle: tabStyles.tabBarStyle,
        headerLeftContainerStyle: {
          paddingLeft: 15,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
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

          tabBarIcon: TabBars.favorites,
          tabBarAccessibilityLabel: "Favoriler",
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
          tabBarIcon: TabBars.search,
          tabBarAccessibilityLabel: "Ara",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Keşfet",
          tabBarAccessibilityLabel: "Keşfet",
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

          tabBarIcon: TabBars.index,
        }}
      />

      <Tabs.Screen
        name="basket"
        options={{
          title: "Sepet",
          tabBarAccessibilityLabel: "Sepet",
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <HeaderSearch />
              </View>
            );
          },

          tabBarIcon: TabBars.basket,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarAccessibilityLabel: "Profil",
          header: () => {
            return (
              <View style={tabStyles.headerWrapper}>
                <HeaderSearch />
              </View>
            );
          },
          tabBarIcon: TabBars.profile,
        }}
      />
    </Tabs>
  );
}

const tabStyles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    paddingHorizontal: 4,

    // new
    // backgroundColor: tertiaryOne,
    // borderRadius: 50,
    // marginHorizontal: 10,
    // paddingHorizontal: 30,
    // marginBottom: 10,
    // gap: 0,
    // display: "flex",
    // flexDirection: "row",
  },
  headerWrapper: {
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight,
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
