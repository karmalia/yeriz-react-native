import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import {
  natural30,
  natural40,
  primaryOne,
  secondaryOne,
} from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import HeaderSearch from "@/components/header/header-search";
import Icons from "@/components/shared/icons/icons";
import { AnimatedTabIcon } from "@/components/shared/icons/animated-tab-icon";
import TabHome from "@/components/shared/tabbars/tab-home";
import TabFilter from "@/components/shared/tabbars/tab-filter";
import TabBasket from "@/components/shared/tabbars/tab-basket";
import TabFavorites from "@/components/shared/tabbars/tab-favorites";
import TabProfile from "@/components/shared/tabbars/tab-profile";
import AnimatedTab from "@/components/shared/tabbars/animated-tab";
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

          tabBarIcon: TabBars.favorites,
        }}
      />
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

          tabBarIcon: TabBars.index,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: "Sepet",
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

const TabBars = {
  index: () => (
    <AnimatedTab>
      {(isFocused) => (
        <>
          <Icons.TabsHome
            width={30}
            height={30}
            style={{
              color: isFocused ? "white" : secondaryOne,
            }}
          />

          {!isFocused && <Text style={{ color: secondaryOne }}>Home</Text>}
        </>
      )}
    </AnimatedTab>
  ),
  search: () => (
    <AnimatedTab>
      {(isFocused) => (
        <>
          <Icons.TabsFilter
            width={30}
            height={30}
            style={{
              color: isFocused ? "white" : secondaryOne,
            }}
          />

          {!isFocused && <Text style={{ color: secondaryOne }}>Filtreler</Text>}
        </>
      )}
    </AnimatedTab>
  ),
  basket: () => (
    <AnimatedTab>
      {(isFocused) => (
        <>
          <Icons.TabsBasket
            width={30}
            height={30}
            style={{
              color: isFocused ? "white" : secondaryOne,
            }}
          />

          {!isFocused && <Text style={{ color: secondaryOne }}>Sepet</Text>}
        </>
      )}
    </AnimatedTab>
  ),
  favorites: () => (
    <AnimatedTab>
      {(isFocused) => (
        <>
          <Icons.TabsFavorites
            width={30}
            height={30}
            style={{
              color: isFocused ? "white" : secondaryOne,
            }}
          />

          {!isFocused && <Text style={{ color: secondaryOne }}>Favoriler</Text>}
        </>
      )}
    </AnimatedTab>
  ),
  profile: () => (
    <AnimatedTab>
      {(isFocused) => (
        <>
          <Icons.TabsProfile
            width={30}
            height={30}
            style={{
              color: isFocused ? "white" : secondaryOne,
            }}
          />

          {!isFocused && <Text style={{ color: secondaryOne }}>Profil</Text>}
        </>
      )}
    </AnimatedTab>
  ),
};

const tabStyles = StyleSheet.create({
  headerStyle: {
    height: 100,
  },
  tabBarStyle: {
    height: 80,
  },
  headerWrapper: {
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    paddingTop: 20,
    borderBottomColor: natural40,
    borderBottomWidth: 1,
  },
  tabBarIconStyle: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    gap: 5,
    borderTopColor: natural40,
    borderTopWidth: 1,
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
