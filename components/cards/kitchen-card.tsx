import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import ThemedText from "../shared/themed-text/themed-text";
import { TKitchenCard, blurhash } from "./card.types";
import Mulish from "@/constants/font";
import useFilterStore, { IFilterItem } from "@/stores/filterStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

// kitchenImages.js
export const kitchenImages = {
  appetizers: require("@/assets/images/kitchen/appetizersBig.jpeg"),
  cigKofte: require("@/assets/images/kitchen/cigKofteBig.jpeg"),
  soup: require("@/assets/images/kitchen/soupBig.jpeg"),
  worldCuisine: require("@/assets/images/kitchen/worldCuisineBig.jpeg"),
  homeCooking: require("@/assets/images/kitchen/homeCookingBig.jpeg"),
  bakery: require("@/assets/images/kitchen/bakeryBig.jpeg"),
  meze: require("@/assets/images/kitchen/mezeBig.jpeg"),
  dessert: require("@/assets/images/kitchen/dessertBig.jpeg"),
  salad: require("@/assets/images/kitchen/saladBig.jpeg"),
};

const KitchenCard = ({ data }: { data: IFilterItem }) => {
  const { toggleFilterBar } = useFilterStore();
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
        minWidth: 150,
      }}
    >
      <ImageBackground
        source={kitchenImages[data.value]}
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity
          style={{
            height: Dimensions.get("window").height * 0.15,
          }}
          activeOpacity={1}
          onPress={() => {
            router.navigate("/modals/filtered-restaurants");

            data.action(data);
            toggleFilterBar(true);
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <ThemedText
        style={{
          color: "black",
          textAlign: "left",
          fontSize: 14,
          fontFamily: Mulish.Bold,
        }}
      >
        {data.name}
      </ThemedText>
    </View>
  );
};

export default KitchenCard;

const styles = StyleSheet.create({});
