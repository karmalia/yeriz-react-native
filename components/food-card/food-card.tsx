import { View, Text } from "react-native";
import React from "react";
import { EBoxType, TFoodCard } from "@/types";

import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { green } from "@/constants/colors";

const FoodCard = ({
  point,
  title,
  boxType,
  time,
  price,
  image,
  id,
}: TFoodCard) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: "white",
          paddingHorizontal: 40,
          paddingVertical: 10,
          zIndex: 100,
          borderTopLeftRadius: 20,
        }}
      >
        <Text>{price}</Text>
      </View>
      {/* <Image source={{ uri: image }} style={styles.cardImage} /> */}

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />
      {/* Top */}
      <View style={styles.cardTop}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <FontAwesome name="star" size={24} color={green} />
          <Text
            style={[
              styles.cardText,
              {
                fontSize: 20,
                fontWeight: "bold",
              },
            ]}
          >
            {point}
          </Text>
        </View>
        <FontAwesome name="heart" size={24} color={"tomato"} />
      </View>
      {/* Bottom */}

      <View style={[styles.cardBottom]}>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: 16,

              paddingVertical: 10,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: 16,
            },
          ]}
        >
          {boxType}
        </Text>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: 16,
            },
          ]}
        >
          Bugün Al: <Text style={{ fontWeight: "100" }}></Text> {time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    elevation: 10,
    aspectRatio: 1.7,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",

    position: "relative",

    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: "100%",

    position: "absolute",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 22,
  },
  cardBottom: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  cardText: {
    color: "white",
  },
});

export default FoodCard;
