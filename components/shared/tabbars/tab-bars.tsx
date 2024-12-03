import React from "react";
import { primaryOne, secondaryFour } from "@/constants/colors";
import Icons from "../icons/icons";
import { View, StyleSheet, Dimensions } from "react-native";
import useBasketStore from "@/stores/basketStore";

const IconSize = 20;

// Reusable TabIcon component
const TabIcon = ({ IconComponent, showBadge = false, isHome }) => (
  <View style={[styles.iconContainer, isHome && styles.focusedContainer]}>
    {showBadge && <View style={styles.badge} />}
    <IconComponent
      width={IconSize}
      height={IconSize}
      style={styles.iconStyle}
    />
  </View>
);

export const TabBars = {
  index: () => <TabIcon IconComponent={Icons.TabsHome} isHome={true} />,
  search: () => <TabIcon IconComponent={Icons.TabsFilter} isHome={false} />,
  basket: () => {
    const { basketItems } = useBasketStore();
    return (
      <TabIcon
        IconComponent={Icons.TabsBasket}
        showBadge={basketItems.length > 0}
        isHome={false}
      />
    );
  },
  favorites: () => (
    <TabIcon IconComponent={Icons.TabsFavorites} isHome={false} />
  ),
  profile: () => <TabIcon IconComponent={Icons.TabsProfile} isHome={false} />,
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  focusedContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginBottom: 55,
    marginLeft: 1,
    backgroundColor: primaryOne,
  },
  iconStyle: {
    color: primaryOne,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: secondaryFour,
    height: 13,
    width: 13,
    borderRadius: 50,
    zIndex: 1,
  },
});
