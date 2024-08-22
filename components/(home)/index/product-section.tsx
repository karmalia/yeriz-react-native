import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { natural30 } from "@/constants/colors";

import Icons from "@/components/shared/icons/icons";
import Poppins from "@/constants/font";
import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
import { Link } from "expo-router";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

type TProductSection = {
  sectionTitle: string;
  cardType: "product" | "kitchen";
  hasLink?: boolean | undefined;
  data: TProductCard["data"][] | TKitchenCard["data"][];
  variant: TProductCard["variant"];
};

const CardLookUp = {
  product: ProductCard,
  kitchen: KitchenCard,
};

const ProductSection = ({
  sectionTitle,
  data,
  cardType,
  variant,
  hasLink,
}: TProductSection) => {
  const Card = CardLookUp[cardType || "product"];
  console.log("data");
  return (
    <GestureHandlerRootView style={styles.listWrapper}>
      <View style={styles.titleWrapper}>
        <ThemedText style={styles.title}>
          {sectionTitle || "Error: Section Title is missing"}
        </ThemedText>

        {hasLink && (
          <Link href={`/modals/listcards-modal?title=${sectionTitle}`}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: 4,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 12,
                  color: natural30,
                }}
              >
                Tümünü göster
              </ThemedText>
              <Icons.ChevronRight
                width={14}
                height={14}
                style={{
                  color: natural30,
                  marginBottom: 2,
                }}
              />
            </View>
          </Link>
        )}
      </View>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              <Card data={item} variant={variant} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id + "productSection"}
      />
    </GestureHandlerRootView>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  listWrapper: {
    gap: 12,
    height: "100%",
    display: "flex",
    paddingTop: 10,

    maxHeight: Dimensions.get("window").height * 0.25,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardList: {
    gap: 16,
    alignItems: "center",
    height: 150,
    paddingLeft: 10,
    borderColor: "green",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: Poppins.Regular,
    height: 24,
  },
});
