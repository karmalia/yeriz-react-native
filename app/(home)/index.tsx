import * as React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import ProductSection from "@/components/(home)/index/product-section";

import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataProduct2 from "../../dummy-datas/dummyDataProduct2.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";
import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link } from "expo-router";
import { natural30 } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Sections = [
  {
    title: {
      hasLink: true,
      title: "Popüler Ürünler",
      isHorizontal: true,
      variant: "small",
      cardType: "product",
    },
    data: dummyDataProduct,
  },
  {
    title: {
      hasLink: false,
      title: "Mutfak",
      isHorizontal: true,
      cardType: "kitchen",
    },
    data: dummyDataKitchen,
  },
  {
    title: {
      hasLink: true,
      title: "Senin için öneriler",
      isHorizontal: true,
      variant: "small",
      cardType: "product",
    },
    data: dummyDataProduct2,
  },
];

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          sections={Sections}
          renderSectionHeader={({ section }) => {
            return (
              <>
                <View
                  style={[
                    styles.titleWrapper,
                    {
                      paddingBottom: 12,
                    },
                  ]}
                >
                  <ThemedText style={styles.title}>
                    {section.title.title || "Error: Section Title is missing"}
                  </ThemedText>

                  {section.title.hasLink && (
                    <Link
                      href={`/modals/listcards-modal?title=${section.title.title}`}
                    >
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
                  style={{ width: "100%" }}
                  data={section.data}
                  horizontal={section.title.isHorizontal}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    switch (section.title.cardType) {
                      case "product":
                        return (
                          <View
                            style={{
                              marginLeft: 12,
                              marginBottom: 12,
                            }}
                          >
                            <ProductCard
                              data={item as TProductCard["data"]}
                              variant={"small"}
                            />
                          </View>
                        );
                      case "kitchen":
                        return (
                          <View
                            style={{
                              marginLeft: 12,
                              marginBottom: 12,
                            }}
                          >
                            <KitchenCard data={item as TKitchenCard["data"]} />
                          </View>
                        );
                      default:
                        return null;
                    }
                  }}
                  keyExtractor={(item) => item.id + "productSection"}
                />
              </>
            );
          }}
          renderItem={({ item }) => {
            return null;
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
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
});
