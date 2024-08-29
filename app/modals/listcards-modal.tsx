import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";
import {
  FlatList,
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Poppins from "@/constants/font";
import Constants from "expo-constants";
import Icons from "@/components/shared/icons/icons";
import {
  primaryOne,
  secondary,
  secondaryFour,
  secondaryOne,
  statusWarning,
  tertiaryOne,
  tertiaryThree,
} from "@/constants/colors";

import useBasketStore from "@/stores/basketStore";
import KitchenCard from "@/components/cards/kitchen-card";

const ListcardModals = () => {
  const { increaseItem, decreaseItem, items, resetBasket } = useBasketStore();

  const router = useRouter();
  const params = useLocalSearchParams();
  let data = [] as any;
  switch (params.title) {
    case "Popüler Ürünler":
      data = dummyDataProduct;
      break;
    case "Mutfak":
      data = dummyDataKitchen;
      break;
    case "Senin için önerilenler":
      data = dummyDataProduct;
      break;
    default:
      data = dummyDataProduct;
      break;
  }

  return (
    <GestureHandlerRootView>
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          height: 60,
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          marginBottom: 10,
          borderBottomColor: "#e0e0e0",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icons.ChevronLeft
            width={24}
            height={24}
            style={{ color: primaryOne, marginLeft: 20 }}
            onPress={() => router.navigate("/(home)/")}
          />
          <ThemedText
            style={{
              fontSize: 22,
              textAlign: "left",
              fontFamily: Poppins.SemiBold,
              color: "black",
              paddingHorizontal: 20,
            }}
          >
            {params.title || "Error: Section Title is missing"}
          </ThemedText>
        </View>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            marginRight: 20,
          }}
          onPress={() => {
            router.navigate("/(home)/basket");
          }}
        >
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
          <Icons.TabsBasket
            width={26}
            height={26}
            style={{ color: primaryOne }}
          />
        </TouchableOpacity>
      </View>
      {params.title === "Mutfak" && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          {data &&
            data.map((item: any) => {
              return (
                <View style={styles.cardContainer}>
                  <KitchenCard data={item} />
                </View>
              );
            })}
        </View>
      )}
      {params.title === "Popüler Ürünler" ||
        (params.title === "Senin için önerilenler" && (
          <View>
            {data && (
              <FlatList
                data={data || []}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.cardContainer}>
                      <ProductCard data={item} variant="large" />
                    </View>
                  );
                }}
                keyExtractor={(item) => item.id + "listcards"}
                contentContainerStyle={styles.flatListContent}
              />
            )}
          </View>
        ))}
    </GestureHandlerRootView>
  );
};

export default ListcardModals;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center", // Center the cards horizontally
    justifyContent: "center", // Center the cards vertically
    paddingBottom: 20, // Add some vertical spacing between the cards
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center", // Center the FlatList content vertically if it doesn't fill the screen
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
    height: 160,
  },
});
