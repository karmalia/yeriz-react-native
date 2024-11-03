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
import Mulish from "@/constants/font";
import Constants from "expo-constants";
import Icons from "@/components/shared/icons/icons";
import { primaryOne } from "@/constants/colors";

import KitchenCard from "@/components/cards/kitchen-card";

const ListcardModals = () => {
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

  const createPairs = (data: any) => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
      pairs.push([data[i], data[i + 1]]);
    }
    return pairs;
  };

  const KitchenList = ({ data }) => {
    const pairs = createPairs(data); // Transform data into pairs

    return (
      <FlatList
        data={pairs}
        keyExtractor={(item, index) => `pair-${index}`}
        style={{
          paddingHorizontal: 20,
          backgroundColor: "white",
          flex: 1,
        }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.cardContainer}>
              <KitchenCard data={item[0]} />
            </View>
            {item[1] ? (
              <View style={styles.cardContainer}>
                <KitchenCard data={item[1]} />
              </View>
            ) : (
              <View style={styles.cardContainer} /> // Empty space if no second item
            )}
          </View>
        )}
      />
    );
  };

  return (
    <>
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          height: 60,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
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
              fontFamily: Mulish.SemiBold,
              color: "black",
              paddingHorizontal: 20,
            }}
          >
            {params.title || "Error: Section Title is missing"}
          </ThemedText>
        </View>
      </View>
      <>
        {params.title === "Mutfak" && <KitchenList data={data} />}
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
      </>
    </>
  );
};

export default ListcardModals;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flex: 1,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 20,
  },
});
