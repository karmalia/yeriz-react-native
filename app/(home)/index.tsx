import * as React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import { View } from "react-native";

import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataProduct2 from "../../dummy-datas/dummyDataProduct2.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";

import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link } from "expo-router";
import { contentWhite, natural30 } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";
import Advertisement from "@/components/(home)/advertisement/advertisement";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import HomeCompanySlider from "@/components/(home)/index/home-company-slider";

const Sections: {
  title: {
    hasLink: boolean;
    title: string;
    isHorizontal: boolean;
    cardType: "product" | "kitchen";
    variant?: "small" | "large";
  } | null;
  data: (TProductCard | TKitchenCard)[];
  Component: ({ section }: { section: any }) => React.JSX.Element;
}[] = [
  {
    title: null,
    data: [],
    Component: Advertisement,
  },
  {
    title: {
      hasLink: true,
      title: "Mutfak",
      isHorizontal: true,
      cardType: "kitchen",
    },
    data: dummyDataKitchen as unknown as TKitchenCard[],
    Component: KitchenSlider,
  },
  {
    title: {
      hasLink: true,
      title: "Yakındakiler",
      isHorizontal: true,
      variant: "small",
      cardType: "product",
    },
    data: dummyDataProduct as unknown as TProductCard[],
    Component: HomeCompanySlider,
  },
  {
    title: {
      hasLink: true,
      title: "Sevilen Mekanlar",
      isHorizontal: true,
      variant: "small",
      cardType: "product",
    },
    data: dummyDataProduct2 as unknown as TProductCard[],
    Component: HomeCompanySlider,
  },
  {
    title: {
      hasLink: true,
      title: "Senin için önerilenler",
      isHorizontal: true,
      variant: "small",
      cardType: "product",
    },
    data: dummyDataProduct2 as unknown as TProductCard[],
    Component: HomeCompanySlider,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={Sections}
        renderSectionHeader={({ section }) => {
          const Component = section.Component;
          return <Component section={section} />;
        }}
        renderItem={({ item }) => {
          return null;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: contentWhite,
    paddingTop: 20,
    paddingBottom: 60,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: Mulish.Regular,
    height: 24,
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 4,
  },
  linkText: {
    fontSize: 12,
    color: natural30,
  },
  iconStyle: {
    color: natural30,
    marginBottom: 2,
  },
});
