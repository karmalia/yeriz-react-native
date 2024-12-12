import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash, TProductCard } from "./card.types";
import ThemedText from "../shared/themed-text/themed-text";
import {
  defaultShadow,
  natural10,
  natural20,
  natural30,
  primaryOne,
} from "@/constants/colors";
import CardIcons from "../shared/icons/card.icons";
import Mulish from "@/constants/font";
import useBasketStore from "@/stores/basketStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TFood } from "@/types";
import { Ionicons } from "@expo/vector-icons";

interface BasketProps extends TFood {
  quantity: number;
  availableTime: string;
  imageUrl: any;
  id: string;
}

const BasketCard = ({
  availableTime,
  discountedPrice,
  id,
  imageUrl,
  name,
  originalPrice,
  quantity,
}: BasketProps) => {
  const { increaseItem, decreaseItem, deleteItem } = useBasketStore();

  return (
    <View style={[styles.card, { ...defaultShadow }]}>
      <View
        style={{
          width: "33%",
          height: "100%",
          position: "relative",
          borderRadius: 12,
        }}
      >
        <Image
          //Require is not required when using local files
          source={imageUrl}
          style={{
            width: "100%",
            borderRadius: 12,
            height: "100%",
          }}
          placeholder={{ blurhash }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            borderRadius: 12,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          paddingLeft: 8,
          gap: 4,
        }}
      >
        <ThemedText
          style={{
            fontSize: 14,
            height: 16,
            fontFamily: Mulish.SemiBold,
            color: primaryOne,
            textAlign: "left",
            width: "100%",
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
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
            width={12}
            height={12}
            style={{
              color: primaryOne,
            }}
          />
          <ThemedText
            style={{
              fontSize: 12,
              color: primaryOne,
              textAlign: "left",
              height: 14,
            }}
          >
            {availableTime}
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
          <View style={{}}>
            <ThemedText
              style={{
                height: 14,
                fontSize: 12,
                color: natural30,
                fontFamily: Mulish.Medium,
              }}
            >
              {originalPrice} TL
            </ThemedText>
            <ThemedText
              style={{
                fontSize: 18,
                height: 20,
                fontFamily: Mulish.Bold,
              }}
              variant="primary"
            >
              {discountedPrice} TL
            </ThemedText>
          </View>
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
                quantity > 1 ? decreaseItem(null) : deleteItem(null);
              }}
            >
              <CardIcons.DecreaseIcon
                style={{
                  color: primaryOne,
                }}
              />
            </TouchableOpacity>

            <ThemedText
              style={{
                fontSize: 22,
                height: 24,
                color: natural20,
                fontFamily: Mulish.Bold,
              }}
            >
              {quantity || 0}
            </ThemedText>
            <TouchableOpacity
              onPress={() => {
                increaseItem(null);
              }}
            >
              <CardIcons.IncreaseIcon
                style={{
                  color: primaryOne,
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
    height: 125,
    width: "100%",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    flexDirection: "row",
  },
});
