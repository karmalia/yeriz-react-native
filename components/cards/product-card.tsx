import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import {
  natural10,
  natural30,
  secondaryOne,
  tertiaryOne,
  tertiaryThree,
} from "@/constants/colors";
import Mulish from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import { Image } from "expo-image";
import { TProductCard, blurhash } from "./card.types";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import useBasketStore from "@/stores/basketStore";

const getWidth = (variant: TProductCard["variant"]) => {
  const screenWidth = Dimensions.get("window").width;
  const isLandscape = screenWidth > Dimensions.get("window").height;

  if (variant === "small") {
    return 235;
  } else {
    const width = screenWidth * 0.8;
    return isLandscape ? Math.min(width, 400) : width; // Limit width to 400 in landscape mode
  }
};

const getHeight = (variant: TProductCard["variant"]) => {
  if (variant === "small") {
    return 135;
  } else {
    return Dimensions.get("window").height * 0.2;
  }
};

const ProductCard = ({ data, variant }: TProductCard) => {
  const { addItem, basketItems } = useBasketStore();

  return (
    <GestureHandlerRootView>
      <View
        style={[
          styles.card,
          styles.cardShadow,
          {
            width: getWidth(variant),
            height: getHeight(variant),
          },
        ]}
      >
        <View style={styles.cardContent}>
          <ThemedText
            style={{
              fontSize: 20,
              fontFamily: Mulish.SemiBold,
              textDecorationLine: "underline",
              textAlign: "left",
            }}
          >
            {data.companyName}
          </ThemedText>

          <ThemedText
            style={{
              fontSize: 12,
              textAlign: "left",
              fontFamily: Mulish.SemiBold,
            }}
          >
            Bugün al{" "}
            <Text
              style={{
                fontFamily: Mulish.Medium,
              }}
            >
              {data.availableFrom}:00 - {data.availableUntil}:00
            </Text>
          </ThemedText>

          <ThemedText
            style={{
              fontSize: 12,
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            {data.name}
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
              width: "30%",
              borderTopRightRadius: 20,
              paddingTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: natural30,
                textDecorationLine: "line-through",
                fontFamily: Mulish.MediumItalic,
                textAlignVertical: "bottom",
              }}
            >
              {data.originalPrice}.00₺
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlignVertical: "bottom",
                color: natural10,
                fontFamily: Mulish.Regular,
              }}
            >
              {data.discountedPrice}.00₺
            </Text>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 20,
              alignItems: "center",
              backgroundColor: basketItems.find((item) => item.id === data.id)
                ? secondaryOne
                : "white",
              height: 40,
              borderTopLeftRadius: 20,
            }}
            disabled={
              basketItems.find((item) => item.id === data.id) ? true : false
            }
            onPress={() => {
              if (basketItems.find((item) => item.id === data.id)) {
                return;
              } else {
                addItem(data);
              }
            }}
          >
            <CardIcons.PlusIcon
              style={{
                color: basketItems.find((item) => item.id === data.id)
                  ? "white"
                  : tertiaryOne,
              }}
            />
          </TouchableOpacity>
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
        {data.isActive ? (
          <CardIcons.FavoriteUp
            style={[
              styles.badge,
              {
                color: tertiaryThree,
              },
            ]}
          />
        ) : (
          <CardIcons.FavoriteDown
            style={[
              styles.badge,
              {
                color: tertiaryThree,
              },
            ]}
          />
        )}
        <Image
          //Require is not required when using local files
          source={data.foodImage[0].imageUrl}
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
    </GestureHandlerRootView>
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
  },
  cardShadow: {
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

    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
