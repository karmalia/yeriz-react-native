import React from "react";
import { primaryOne } from "@/constants/colors";
import Icons from "../icons/icons";
import AnimatedTab from "./animated-tab";
import { Text } from "react-native";

const IconSize = 20;

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
        <Text style={{ color: primaryOne }}>Ana Sayfa</Text>
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
        <Text style={{ color: primaryOne }}>Ara</Text>
      </>
    );
  },
  basket: ({ focused }) => {
    return (
      <>
        <AnimatedTab>
          {(isFocused) => (
            <Icons.TabsBasket
              width={IconSize}
              height={IconSize}
              style={{
                color: isFocused ? "white" : primaryOne,
              }}
            />
          )}
        </AnimatedTab>
        <Text style={{ color: primaryOne }}>Sepet</Text>
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
        <Text style={{ color: primaryOne }}>Favoriler</Text>
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
        <Text style={{ color: primaryOne }}>Profil</Text>
      </>
    );
  },
};
