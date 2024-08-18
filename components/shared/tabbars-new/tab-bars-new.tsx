import React from "react";
import { primaryOne, secondaryOne } from "@/constants/colors";
import Icons from "../icons/icons";
import NewAnimatedTab from "./new-animated-tab";
import { StyleSheet, Text, View } from "react-native";

const IconSize = 20;

export const styles = StyleSheet.create({
  wrapperStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  textStyle: {
    fontSize: 12,
  },
});

export const TabBarsNew = {
  index: () => {
    return (
      <NewAnimatedTab>
        {(isFocused) => (
          <View style={[styles.wrapperStyle]}>
            <Icons.TabsHome
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : secondaryOne,
              }}
            />

            <Text
              style={[
                styles.textStyle,
                { color: isFocused ? "white" : primaryOne },
              ]}
            >
              Home
            </Text>
          </View>
        )}
      </NewAnimatedTab>
    );
  },
  search: () => {
    return (
      <NewAnimatedTab>
        {(isFocused) => (
          <View style={[styles.wrapperStyle]}>
            <Icons.TabsFilter
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : secondaryOne,
              }}
            />
            {isFocused && (
              <Text
                style={[
                  styles.textStyle,
                  { color: isFocused ? "white" : primaryOne },
                ]}
              >
                Filtre
              </Text>
            )}
          </View>
        )}
      </NewAnimatedTab>
    );
  },
  basket: () => {
    return (
      <NewAnimatedTab>
        {(isFocused) => (
          <View style={[styles.wrapperStyle]}>
            <Icons.TabsBasket
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : secondaryOne,
              }}
            />
            {isFocused && (
              <Text
                style={[
                  styles.textStyle,
                  { color: isFocused ? "white" : primaryOne },
                ]}
              >
                Home
              </Text>
            )}
          </View>
        )}
      </NewAnimatedTab>
    );
  },
  favorites: () => {
    return (
      <NewAnimatedTab>
        {(isFocused) => (
          <View style={[styles.wrapperStyle]}>
            <Icons.TabsFavorites
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : secondaryOne,
              }}
            />
            {isFocused && (
              <Text
                style={[
                  styles.textStyle,
                  { color: isFocused ? "white" : primaryOne },
                ]}
              >
                Favoriler
              </Text>
            )}
          </View>
        )}
      </NewAnimatedTab>
    );
  },
  profile: () => {
    return (
      <NewAnimatedTab>
        {(isFocused) => (
          <View style={[styles.wrapperStyle]}>
            <Icons.TabsProfile
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : secondaryOne,
              }}
            />
            {isFocused && (
              <Text
                style={[
                  styles.textStyle,
                  { color: isFocused ? "white" : primaryOne },
                ]}
              >
                Profil
              </Text>
            )}
          </View>
        )}
      </NewAnimatedTab>
    );
  },
};
