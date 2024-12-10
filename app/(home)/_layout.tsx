import React, {
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tabs } from "expo-router";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  natural30,
  natural40,
  primaryOne,
  secondaryOne,
  secondaryThree,
  secondaryTwo,
} from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import AddressBar from "@/components/header/address-bar";
import Icons from "@/components/shared/icons/icons";
import Constants from "expo-constants";
import { TabBars } from "@/components/shared/tabbars/tab-bars";
import { StatusBar } from "expo-status-bar";
import TabbarIndicator from "@/components/shared/tabbars/tabbar-indicator";
import FilterOrderBar from "@/components/shared/action-bars/filter-order-bar";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { styles } from "../(login)/enter-code";
import Mulish from "@/constants/font";
import DefaultTabHeader from "@/components/shared/default-tab-header/default-tab-header";
// import { TabBarsNew } from "@/components/shared/tabbars-new/tab-bars-new";

type IconPos = {
  x: number;
  y: number;
};

export default function TabLayout() {
  const [tabIconPositions, setTabIconPositions] = useState<{
    [key: string]: IconPos;
  }>({});

  const [activeTab, setActiveTab] = useState<string>("index");

  // Refs for each tab icon
  const searchRef = useRef(null);
  const favoritesRef = useRef(null);
  const indexRef = useRef(null);
  const basketRef = useRef(null);
  const profileRef = useRef(null);

  const refs = {
    search: searchRef,
    favorites: favoritesRef,
    index: indexRef,
    basket: basketRef,
    profile: profileRef,
  };

  const measureIconPosition = (name: string) => {
    refs[name].current?.measure((x, y, width, height, pageX, pageY) => {
      console.log("Icon Position:", name, pageX, pageY);
      setTabIconPositions((prevPositions) => ({
        ...prevPositions,
        [name]: { x: pageX, y: pageY },
      }));
    });
  };

  useEffect(() => {
    // Measure each icon's position after the layout is complete
    Object.keys(refs).forEach((key) => {
      measureIconPosition(key);
    });
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,

          tabBarStyle: tabStyles.tabBarStyle,

          tabBarHideOnKeyboard: true,
          tabBarBackground: () => {
            return (
              <ImageBackground
                source={require("@/assets/images/tabbar/TabBarBgImage.png")}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: -1,
                }}
              />
            );
          },
          tabBarAccessibilityLabel: "TabBar",
        }}
      >
        <Tabs.Screen
          name="search"
          listeners={{
            tabPress: () => setActiveTab("search"),
          }}
          options={{
            title: "Ara",
            header: () => {
              return <DefaultTabHeader title="Ara" />;
            },

            tabBarIcon: () => {
              return (
                <View ref={searchRef}>
                  <TabBars.search />
                </View>
              );
            },
            tabBarAccessibilityLabel: "Ara",
          }}
        />
        <Tabs.Screen
          name="favorites"
          listeners={{
            tabPress: () => setActiveTab("favorites"),
          }}
          options={{
            title: "Favoriler",
            header: () => {
              return <DefaultTabHeader title="Favoriler" />;
            },

            tabBarIcon: () => {
              return (
                <View ref={favoritesRef}>
                  <TabBars.favorites />
                </View>
              );
            },
            tabBarAccessibilityLabel: "Favoriler",
          }}
        />

        <Tabs.Screen
          name="index"
          listeners={{
            tabPress: () => setActiveTab("index"),
          }}
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
                      paddingVertical: 10,

                      gap: 10,
                      paddingHorizontal: 20,
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <Icons.KesfetLogo width={30} height={30} />

                    <ThemedText
                      style={{
                        fontSize: 20,
                        fontWeight: "400",
                        color: natural30,
                        backgroundColor: "transparent",
                      }}
                    >
                      Hoşgeldiniz
                    </ThemedText>
                  </View>
                  <AddressBar />
                </View>
              );
            },

            tabBarIcon: () => {
              return (
                <View ref={indexRef}>
                  <TabBars.index />
                </View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="basket"
          listeners={{
            tabPress: () => setActiveTab("basket"),
          }}
          options={{
            title: "Sepet",
            tabBarAccessibilityLabel: "Sepet",
            header: () => {
              return <DefaultTabHeader title="Sepet" />;
            },

            tabBarIcon: () => {
              return (
                <View ref={basketRef}>
                  <TabBars.basket />
                </View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="profile"
          listeners={{
            tabPress: () => setActiveTab("profile"),
          }}
          options={{
            tabBarAccessibilityLabel: "Profil",
            headerShown: false,
            header: () => {
              return (
                <View style={tabStyles.headerWrapper}>
                  <AddressBar />
                </View>
              );
            },
            tabBarIcon: () => {
              return (
                <View ref={profileRef}>
                  <TabBars.profile />
                </View>
              );
            },
          }}
        />
      </Tabs>
      {Object.keys(tabIconPositions).length === 5 && (
        <TabbarIndicator
          tabIconPositions={tabIconPositions}
          activeTab={activeTab}
        />
      )}
    </>
  );
}

const tabStyles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    borderTopWidth: 0,
    position: "absolute",
    elevation: 0,
  },
  headerWrapper: {
    backgroundColor: "white",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: Constants.statusBarHeight,
    elevation: 4,
    shadowColor: natural30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  tabTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: natural30,
    backgroundColor: "transparent",
  },
  tabIcon: {
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
