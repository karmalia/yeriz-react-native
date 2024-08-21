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

type TProductSection = {
  sectionTitle: string;
  cardType: "product" | "kitchen";

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
}: TProductSection) => {
  const Card = CardLookUp[cardType || "product"];

  return (
    <View style={styles.listWrapper}>
      <View style={styles.titleWrapper}>
        <ThemedText style={styles.title}>
          {sectionTitle || "Error: Section Title is missing"}
        </ThemedText>
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
          <Link href={`/modals/listcards-modal?title=${sectionTitle}`}>
            <ThemedText
              style={{
                fontSize: 12,
                color: natural30,
              }}
            >
              Tümünü göster
            </ThemedText>
          </Link>

          <Icons.ChevronRight
            width={14}
            height={14}
            style={{
              color: natural30,
              marginBottom: 2,
            }}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      >
        {data ? (
          data?.map((item) => (
            <Card key={item.id} data={item} variant={variant} />
          ))
        ) : (
          <Text>There is no product data</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  listWrapper: {
    gap: 12,
    height: Dimensions.get("window").height * 0.3,
    display: "flex",
    paddingTop: 10,
    maxHeight: 200,

    // borderWidth: 2,
    // borderColor: "red",
  },
  cardList: {
    gap: 16,
    alignItems: "center",

    paddingLeft: 10,
    // borderWidth: 2,
    // borderColor: "green",
  },

  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: Poppins.Regular,
    height: 24,
  },
});
