import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import ProductSection from "@/components/(home)/index/product-section";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";

import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataProduct2 from "../../dummy-datas/dummyDataProduct2.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";
import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProductSection
        sectionTitle="Popüler Ürünler"
        data={dummyDataProduct as TProductCard["data"][]}
        variant="small"
        cardType="product"
      />
      <ProductSection
        sectionTitle="Mutfak"
        data={dummyDataKitchen as TKitchenCard["data"][]}
        variant="small"
        cardType="kitchen"
      />
      <ProductSection
        sectionTitle="Senin için önerilenler"
        data={dummyDataProduct2 as TProductCard["data"][]}
        variant="small"
        cardType="product"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});
