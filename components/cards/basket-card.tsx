import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash, TProductCard } from "./card.types";
import ThemedText from "../shared/themed-text/themed-text";
import { natural10, natural20, primaryOne } from "@/constants/colors";
import CardIcons from "../shared/icons/card.icons";
import Poppins from "@/constants/font";
import useBasketStore from "@/stores/basketStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TFood } from "@/types";
import { Ionicons } from "@expo/vector-icons";

interface BasketProps extends TFood {
  quantity: number;
}

const BasketCard = (data: BasketProps) => {
  const { increaseItem, decreaseItem, deleteItem } = useBasketStore();

  console.log("data sx", data);

  return (
    <View style={[styles.card, styles.shadow]}>
      <Image
        //Require is not required when using local files
        source={data.foodImage[0].imageUrl}
        style={{
          width: "33%",
          height: "100%",
          borderRadius: 12,
        }}
        placeholder={{ blurhash }}
      />
      <View
        style={{
          flex: 1,
          paddingTop: 2,
          paddingLeft: 8,
        }}
      >
        <ThemedText
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: natural20,
            textAlign: "left",
            width: "100%",
            paddingBottom: 4,
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {data.name}
        </ThemedText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 4,
            alignItems: "center",
          }}
        >
          <CardIcons.ClockIcon
            style={{
              color: primaryOne,
            }}
          />
          <ThemedText
            style={{
              fontSize: 14,
              color: natural20,
              textAlign: "left",
              height: 20,
            }}
          >
            {data.availableFrom}:00 - {data.availableUntil}:00
          </ThemedText>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <ThemedText
            style={{
              fontSize: 22,

              fontFamily: Poppins.Bold,
            }}
            variant="primary"
          >
            {data.discountedPrice} TL
          </ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                data.quantity > 1 ? decreaseItem(data) : deleteItem(data);
              }}
            >
              <CardIcons.DecreaseIcon
                style={{
                  color: primaryOne,
                  marginBottom: 4,
                }}
              />
            </TouchableOpacity>

            <ThemedText
              style={{
                fontSize: 22,
                color: natural20,
                fontFamily: Poppins.Bold,

                width: 20,
              }}
            >
              {data.quantity || 0}
            </ThemedText>
            <TouchableOpacity
              onPress={() => {
                increaseItem(data);
              }}
            >
              <CardIcons.IncreaseIcon
                style={{
                  color: primaryOne,
                  marginBottom: 4,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 135,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
