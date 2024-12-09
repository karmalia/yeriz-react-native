import { StyleSheet } from "react-native";
import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { tertiaryOne } from "@/constants/colors";

import BasketProgress from "@/components/(basket)/basket-progress";
import BasketCard from "@/components/cards/basket-card";

import ThemedText from "@/components/shared/themed-text/themed-text";
import useBasketStore from "@/stores/basketStore";

import Constants from "expo-constants";
export default function Favorites() {
  const [stage, setStage] = React.useState(1);
  const { basketItems } = useBasketStore();

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <BasketProgress stage={stage} />
      </View>
      <View>
        <ThemedText
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: tertiaryOne,
            textAlign: "left",
            padding: 10,
            paddingLeft: 20,
          }}
        >
          Sepetim
        </ThemedText>
        <ScrollView
          style={{}}
          contentContainerStyle={{
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {basketItems.length !== 0 &&
            basketItems.map((basketItem) => (
              <BasketCard key={basketItem.id} {...basketItem} />
            ))}

          {basketItems.length === 0 && (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <ThemedText style={{ color: tertiaryOne }}>
                Sepetinizde ürün bulunmamaktadır.
              </ThemedText>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
});
