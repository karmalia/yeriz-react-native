import React from "react";
import { primaryOne, secondaryFour } from "@/constants/colors";
import Icons from "../icons/icons";
import { View, StyleSheet } from "react-native";
import useBasketStore from "@/stores/basketStore";

const IconSize = 20;

// Reusable TabIcon component
const TabIcon = ({ IconComponent, focused, showBadge = false }) => (
  <View style={[styles.iconContainer, focused && styles.focusedContainer]}>
    {showBadge && <View style={styles.badge} />}
    <IconComponent
      width={IconSize}
      height={IconSize}
      style={styles.iconStyle}
    />
  </View>
);

export const TabBars = {
  index: () => <TabIcon IconComponent={Icons.TabsHome} focused={true} />,
  search: () => <TabIcon IconComponent={Icons.TabsFilter} focused={false} />,
  basket: () => {
    const { basketItems } = useBasketStore();
    return (
      <TabIcon
        IconComponent={Icons.TabsBasket}
        focused={false}
        showBadge={basketItems.length > 0}
      />
    );
  },
  favorites: () => (
    <TabIcon IconComponent={Icons.TabsFavorites} focused={false} />
  ),
  profile: () => <TabIcon IconComponent={Icons.TabsProfile} focused={false} />,
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
    height: IconSize * 3,
    width: IconSize * 3,
    borderRadius: 50,
    marginBottom: 50,
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
