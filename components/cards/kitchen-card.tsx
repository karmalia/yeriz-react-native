import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ThemedText from "../shared/themed-text/themed-text";
import { TKitchenCard, blurhash } from "./card.types";
import Mulish from "@/constants/font";

const KitchenCard = ({ data }: TKitchenCard) => {
  return (
    <View
      style={{
        width: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
      }}
    >
      <View
        style={{
          width: 150,
          height: 100,
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
            zIndex: 0,
            backgroundColor: "rgba(0,0,0,0.5)",

            overflow: "hidden",
          }}
        />
        <Image
          //Require is not required when using local files
          source={data.imageUrl}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          placeholder={{ blurhash }}
        />
      </View>
      <ThemedText
        style={{
          color: "black",
          textAlign: "left",
          fontSize: 13,
          fontFamily: Mulish.SemiBold,
        }}
      >
        {data.title}
      </ThemedText>
    </View>
  );
};

export default KitchenCard;

const styles = StyleSheet.create({});
