import React, {
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tabs } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { natural30, natural40, primaryOne } from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import HeaderSearch from "@/components/header/header-search";
import Icons from "@/components/shared/icons/icons";
import Constants from "expo-constants";
import { TabBars } from "@/components/shared/tabbars/tab-bars";
import { StatusBar } from "expo-status-bar";
import TabbarIndicator from "@/components/shared/tabbars/tabbar-indicator";
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
          headerShown: useClientOnlyValue(false, true),
          tabBarShowLabel: false,

          tabBarStyle: tabStyles.tabBarStyle,
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },

          tabBarHideOnKeyboard: true,
          tabBarBackground: () => {
            return (
              <ImageBackground
                source={require("@/assets/images/tabbar/Subtract.png")}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: -1,
                  zIndex: -1,
                }}
              />
            );
          },
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
              return (
                <View style={tabStyles.headerWrapper}>
                  <HeaderSearch />
                </View>
              );
            },

            tabBarIcon: ({ focused }) => {
              return (
                <View ref={searchRef}>
                  <TabBars.search focused={focused} />
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
              return (
                <View style={tabStyles.headerWrapper}>
                  <HeaderSearch />
                </View>
              );
            },

            tabBarIcon: ({ focused }) => {
              return (
                <View ref={favoritesRef}>
                  <TabBars.favorites focused={focused} />
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

            tabBarIcon: ({ focused }) => {
              return (
                <View ref={indexRef}>
                  <TabBars.index focused={focused} />
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
              return (
                <View style={tabStyles.headerWrapper}>
                  <HeaderSearch />
                </View>
              );
            },

            tabBarIcon: ({ focused }) => {
              return (
                <View ref={basketRef}>
                  <TabBars.basket focused={focused} />
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
            title: "Profil",
            tabBarAccessibilityLabel: "Profil",
            header: () => {
              return (
                <View style={tabStyles.headerWrapper}>
                  <HeaderSearch />
                </View>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View ref={profileRef}>
                  <TabBars.profile focused={focused} />
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
    backgroundColor: "transparent",
    position: "absolute",
    elevation: 0,
  },
  headerWrapper: {
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 12,

    marginTop: Constants.statusBarHeight,
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
