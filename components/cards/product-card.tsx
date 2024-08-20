import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import { natural10, natural30 } from "@/constants/colors";
import Poppins from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import { Image } from "expo-image";
import { TProductCard, blurhash } from "./card.types";

const ProductCard = ({
  title,
  originalPrice,
  newPrice,
  imageUrl,
  isFavorite,
}: TProductCard) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <ThemedText
          style={{
            fontSize: 18,
            fontWeight: "semibold",
            textDecorationLine: "underline",
            textAlign: "left",
            lineHeight: 22,
          }}
        >
          {title}
        </ThemedText>

        <ThemedText
          style={{
            fontSize: 12,
            textAlign: "left",
            lineHeight: 16,
          }}
        >
          Bugün al{" "}
          <Text
            style={{
              fontFamily: Poppins.Light,
            }}
          >
            18:00-19:00
          </Text>
        </ThemedText>

        <ThemedText
          style={{
            fontSize: 12,
            fontWeight: "600",
            textAlign: "left",
            lineHeight: 16,
          }}
        >
          Medovik Dilim Pasta
        </ThemedText>
      </View>

      <View style={styles.cardBottom}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            height: 40,
            width: "40%",
            borderTopRightRadius: 20,
            paddingTop: 4,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: natural30,
              textDecorationLine: "line-through",
              fontFamily: Poppins.MediumItalic,
              textAlignVertical: "bottom",
              lineHeight: 15,
            }}
          >
            {originalPrice}₺
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlignVertical: "bottom",
              color: natural10,
              fontFamily: Poppins.Regular,
              lineHeight: 15,
            }}
          >
            {newPrice}₺
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
            alignItems: "center",
            backgroundColor: "white",
            height: 40,
            borderTopLeftRadius: 20,
          }}
        >
          <CardIcons.PlusIcon
            style={{
              color: natural10,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      />
      {isFavorite ? (
        <CardIcons.FavoriteUp style={styles.badge} />
      ) : (
        <CardIcons.FavoriteDown style={styles.badge} />
      )}
      <Image
        //Require is not required when using local files
        source={imageUrl}
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
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    color: natural10,
  },
  card: {
    width: 235,
    height: 135,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",

    // shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardContent: {
    width: "100%",

    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 10,
    borderRadius: 20,
  },
  cardBottom: {
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 2,
    borderColor: "white",
  },
});
