import * as React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import { View } from "react-native";

import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataProduct2 from "../../dummy-datas/dummyDataProduct2.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";

import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link } from "expo-router";
import { natural30 } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";
import Advertisement from "@/components/(home)/advertisement/advertisement";

const Sections: {
  title: {
    hasLink: boolean;
    title: string;
    isHorizontal: boolean;
    cardType: "product" | "kitchen";
    variant?: "small" | "large";
  };
  data: (TProductCard | TKitchenCard)[];
}[] = [
  {
    title: {
      hasLink: true,
      title: "Mutfak",
      isHorizontal: true,
      cardType: "kitchen",
    },
    data: dummyDataKitchen as unknown as TKitchenCard[],
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
  },
];

const SectionHeader = ({ title, hasLink }) => (
  <View style={styles.titleWrapper}>
    <ThemedText style={styles.title}>{title}</ThemedText>
    {hasLink && (
      <Link href={`/modals/listcards-modal?title=${title}`}>
        <View style={styles.linkWrapper}>
          <ThemedText style={styles.linkText}>Tümünü göster</ThemedText>
          <Icons.ChevronRight width={14} height={14} style={styles.iconStyle} />
        </View>
      </Link>
    )}
  </View>
);

const CardRenderer = ({
  item,
  cardType,
  variant,
}: {
  item: TProductCard | TKitchenCard;
  cardType: "product" | "kitchen";
  variant?: "small" | "large";
}) => {
  switch (cardType) {
    case "product":
      return (
        <ProductCard
          data={item as unknown as TProductCard}
          variant={variant || "small"}
        />
      );
    case "kitchen":
      return <KitchenCard data={item as TKitchenCard} />;
    default:
      return null;
  }
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={Sections}
        ListHeaderComponent={<Advertisement />}
        renderSectionHeader={({ section }) => {
          return (
            <View // Section Piece
            >
              <SectionHeader
                title={section.title.title}
                hasLink={section.title.hasLink}
              />
              <FlatList
                style={{
                  width: "100%",
                }}
                data={section.data}
                horizontal={section.title.isHorizontal}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        marginBottom: 8,
                        marginLeft: 12,
                      }}
                    >
                      <CardRenderer {...section.title} item={item} />
                    </View>
                  );
                }}
                // ItemSeparatorComponent={() => (
                //   <View
                //     style={{
                //       width: 0,
                //     }}
                //   />
                // )}
                keyExtractor={(item: any) => item.id + "productSection"}
              />
            </View>
          );
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
    backgroundColor: "white",
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
