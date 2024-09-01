import React from "react";
import {
  primaryOne,
  primaryThree,
  secondaryFour,
  statusWarning,
  tertiaryOne,
  tertiaryThree,
} from "@/constants/colors";
import Icons from "../icons/icons";
import AnimatedTab from "./animated-tab";
import { Text, View } from "react-native";
import useBasketStore from "@/stores/basketStore";

const IconSize = 24;

export const TabBars = {
  index: ({ focused }) => {
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <Icons.TabsHome
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : primaryOne,
              }}
            />
          )}
        </AnimatedTab>
      </>
    );
  },
  search: ({ focused }) => {
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <Icons.TabsFilter
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : primaryOne,
              }}
            />
          )}
        </AnimatedTab>
      </>
    );
  },
  basket: ({ focused }) => {
    const { basketItems } = useBasketStore();
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {basketItems.length > 0 && (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: -6,
                      right: -6,
                      backgroundColor: secondaryFour,
                      height: 13,
                      width: 13,
                      zIndex: 1,
                      borderRadius: 50,
                    }}
                  />
                )}

                <Icons.TabsBasket
                  width={IconSize}
                  height={IconSize}
                  style={{ color: isFocused ? "white" : primaryOne }}
                />
              </View>
            </>
          )}
        </AnimatedTab>
      </>
    );
  },
  favorites: ({ focused }) => {
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <Icons.TabsFavorites
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : primaryOne,
              }}
            />
          )}
        </AnimatedTab>
      </>
    );
  },
  profile: ({ focused }) => {
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <Icons.TabsProfile
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : primaryOne,
              }}
            />
          )}
        </AnimatedTab>
      </>
    );
  },
};
