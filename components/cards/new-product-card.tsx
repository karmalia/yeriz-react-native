import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import {
  natural10,
  natural20,
  natural30,
  primaryNew2,
  primaryFour,
  primaryOne,
  primaryThree,
  primaryTwo,
  secondaryOne,
  white,
  primaryFive,
  productCardBackground,
} from "@/constants/colors";
import Poppins from "@/constants/font";
import CardIcons from "../shared/icons/card.icons";
import { Image } from "expo-image";
import { TNewProductCard, TProductCard, blurhash } from "./card.types";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import useBasketStore from "@/stores/basketStore";
import Icons from "../shared/icons/icons";

const getWidth = () => {
  return Dimensions.get("window").width * 0.9;
};

const getHeight = () => {
  return 125;
};

const NewProductCard = ({ data }: TNewProductCard) => {
  const { addItem, basketItems } = useBasketStore();

  const isActive = basketItems.find((item) => item.id === data.id);

  return (
    <GestureHandlerRootView>
      <View
        style={[
          styles.card,
          {
            width: getWidth(),
            height: getHeight(),
            position: "relative",
            overflow: "hidden",
          },
        ]}
      >
        <View
          style={[
            {
              width: "100%",
              height: "100%",
              paddingVertical: 5,
              paddingHorizontal: 6,
              borderRadius: 12,
              display: "flex",
              flexDirection: "row",
            },
          ]}
        >
          <View
            style={{
              width: 115,
              height: 115,
              borderRadius: 12,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={data.foodImage[0].imageUrl}
              style={{
                width: "100%",
                height: "100%",
              }}
              placeholder={{ blurhash }}
            />
            <View
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRadius: 12,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
              paddingLeft: 8,
              borderColor: "red",
            }}
          >
            <View>
              <ThemedText
                style={{
                  fontSize: 14,
                  fontFamily: Poppins.Bold,
                  color: primaryOne,
                }}
              >
                {data.name}
              </ThemedText>
              <ThemedText
                style={{
                  fontSize: 12,
                  fontFamily: Poppins.Regular,
                  color: primaryOne,
                }}
              >
                {data.companyName}
              </ThemedText>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <CardIcons.ClockIcon
                  style={{
                    color: primaryOne,
                  }}
                />

                <Text
                  style={{
                    color: primaryOne,
                    fontSize: 12,
                    fontFamily: Poppins.Bold,
                  }}
                >
                  Bugün
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: primaryOne,
                    fontFamily: Poppins.Regular,
                  }}
                >
                  {data.availableFrom}:00 - {data.availableUntil}:00
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderColor: "blue",
                marginTop: 6,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 12,

                  lineHeight: 16,
                  fontFamily: Poppins.Regular,
                  color: natural30,
                  textDecorationLine: "line-through",
                }}
              >
                {data.originalPrice} TL
              </ThemedText>
              <ThemedText
                style={{
                  fontSize: 18,
                  fontFamily: Poppins.Bold,
                  color: primaryOne,
                }}
              >
                {data.discountedPrice} TL
              </ThemedText>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            addItem(data);
          }}
          style={{
            backgroundColor: isActive ? primaryFour : "white",
            borderColor: primaryFour,
            borderWidth: 1,
            height: 40,
            width: 40,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <CardIcons.PlusIcon
            style={{
              color: isActive ? "white" : primaryFour,
              marginLeft: 2,
              marginTop: 2,
            }}
          />
        </TouchableOpacity>
        {data.isFavorite ? (
          <CardIcons.FavoriteDown
            width={25}
            height={25}
            style={[
              styles.badge,
              {
                color: primaryFour,
              },
            ]}
          />
        ) : (
          <CardIcons.FavoriteUp
            width={25}
            height={25}
            style={[
              styles.badge,
              {
                color: primaryFour,
              },
            ]}
          />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default NewProductCard;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    zIndex: 2,
    width: 10,
    height: 10,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "auto",
    marginTop: 6,
    borderRadius: 12,
    backgroundColor: productCardBackground,
    // shadow
  },
  cardShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.13,
    shadowRadius: 1,
    elevation: 1,
  },
  cardContent: {
    borderWidth: 4,
    flex: 1,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
  },
  cardBottom: {
    width: "100%",
    display: "flex",
    flex: 1,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 2,
  },
});
