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

// kitchenImages.js
export const kitchenImages = {
  "@/assets/images/kitchen/aperatifler.jpeg": require("@/assets/images/kitchen/aperatifler.jpeg"),
  "@/assets/images/kitchen/cig-kofte.jpeg": require("@/assets/images/kitchen/cig-kofte.jpeg"),
  "@/assets/images/kitchen/corba.jpeg": require("@/assets/images/kitchen/corba.jpeg"),
  "@/assets/images/kitchen/dunya-mutfagi.jpeg": require("@/assets/images/kitchen/dunya-mutfagi.jpeg"),
  "@/assets/images/kitchen/ev-yemekleri.jpeg": require("@/assets/images/kitchen/ev-yemekleri.jpeg"),
  "@/assets/images/kitchen/firin-pastahane.jpeg": require("@/assets/images/kitchen/firin-pastahane.jpeg"),
  "@/assets/images/kitchen/makarna-manti.jpeg": require("@/assets/images/kitchen/makarna-manti.jpeg"),
  "@/assets/images/kitchen/meze.jpeg": require("@/assets/images/kitchen/meze.jpeg"),
  "@/assets/images/kitchen/pasta-tatli.jpeg": require("@/assets/images/kitchen/pasta-tatli.jpeg"),
  "@/assets/images/kitchen/salata.jpeg": require("@/assets/images/kitchen/salata.jpeg"),
};

const KitchenCard = ({ data }: { data: TKitchenCard }) => {
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
        source={kitchenImages[data.imageUrl]}
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: Dimensions.get("window").height * 0.15,
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
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
        </View>
      </ImageBackground>
      <ThemedText
        style={{
          color: "black",
          textAlign: "left",
          fontSize: 14,
          fontFamily: Mulish.Bold,
        }}
      >
        {data.title}
      </ThemedText>
    </View>
  );
};

export default KitchenCard;

const styles = StyleSheet.create({});
