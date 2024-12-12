import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import {
  defaultShadow,
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
import { CompanyFood } from "@/api/queries/companies/companies.types";

const getWidth = (variant: TProductCard["variant"]) => {
  const screenWidth = Dimensions.get("window").width;
  const isLandscape = screenWidth > Dimensions.get("window").height;

  if (variant === "small") {
    return 235;
  } else {
    const width = screenWidth * 0.6;
    return isLandscape ? Math.min(width, 400) : width; // Limit width to 400 in landscape mode
  }
};

const getHeight = (variant: TProductCard["variant"]) => {
  if (variant === "small") {
    return 135;
  } else {
    return Dimensions.get("window").height * 0.18;
  }
};

const ProductCard = ({
  data,
  variant,
}: {
  data: CompanyFood["data"][0];
  variant: TProductCard["variant"];
}) => {
  const { addItem, basketItems } = useBasketStore();
  console.log("data", data);

  return (
    <View
      style={[
        styles.card,
        {
          width: getWidth(variant),
          height: getHeight(variant),
        },
        { ...defaultShadow },
      ]}
    >
      <View style={styles.cardContent}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ThemedText
            style={{
              fontSize: 20,
              fontFamily: Mulish.SemiBold,
              textDecorationLine: "underline",
              textAlign: "left",
              flex: 1,
            }}
          >
            {data.name}
          </ThemedText>
          {data?.isActive ? (
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
        </View>

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
            {data.availableTime}
          </Text>
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
              fontSize: 14,
              color: natural30,
              textDecorationLine: "line-through",
              fontFamily: Mulish.MediumItalic,
              textAlignVertical: "bottom",
            }}
          >
            {data.originalPrice}₺
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlignVertical: "bottom",
              color: natural10,
              fontFamily: Mulish.Regular,
            }}
          >
            {data.discountedPrice}₺
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
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  badge: {
    zIndex: 2,
    color: natural10,
  },
  card: {
    width: 200,
    height: 135,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",

    // shadow
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
