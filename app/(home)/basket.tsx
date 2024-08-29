import { SectionList, StyleSheet, Text } from "react-native";
import * as React from "react";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  natural10,
  natural20,
  primaryOne,
  secondaryOne,
  tertiaryOne,
  tertiaryThree,
  tertiaryTwo,
} from "@/constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import BasketProgress from "@/components/(basket)/basket-progress";
import BasketCard from "@/components/cards/basket-card";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/shared/themed-text/themed-text";
import useBasketStore from "@/stores/basketStore";
import { StatusBar } from "expo-status-bar";

export default function Favorites() {
  const [stage, setStage] = React.useState(1);
  const { basketItems } = useBasketStore();

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
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
              basketItems.map((basketItem) => <BasketCard {...basketItem} />)}
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "white",
  },
});
