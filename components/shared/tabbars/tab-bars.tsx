import React, { useEffect } from "react";
import {
  primaryOne,
  primaryThree,
  secondaryFour,
  secondaryOne,
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: IconSize * 2.5,
          width: IconSize * 2.5,
          borderRadius: 50,
          marginBottom: 50,
          backgroundColor: primaryOne,
        }}
      >
        <Icons.TabsHome
          width={IconSize}
          height={IconSize}
          style={{
            color: primaryOne,
          }}
        />
      </View>
    );
  },
  search: ({ focused }) => {
    return (
      <Icons.TabsFilter
        width={IconSize}
        height={IconSize}
        style={{
          color: primaryOne,
        }}
      />
    );
  },
  basket: ({ focused }) => {
    const { basketItems } = useBasketStore();

    return (
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
          style={{ color: primaryOne }}
        />
      </View>
    );
  },
  favorites: ({ focused }) => {
    return (
      <Icons.TabsFavorites
        width={IconSize}
        height={IconSize}
        style={{
          color: primaryOne,
        }}
      />
    );
  },
  profile: ({ focused }) => {
    return (
      <Icons.TabsProfile
        width={IconSize}
        height={IconSize}
        style={{
          color: primaryOne,
        }}
      />
    );
  },
};
