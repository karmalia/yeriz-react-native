import { SafeAreaView, StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import ProductCard from "@/components/cards/product-card";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function Favorites() {
  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyDataProduct.filter((item) => item.isFavorite)}
          renderItem={({ item }) => {
            return <ProductCard data={item} variant="large" />;
          }}
          keyExtractor={(item) => item.id + "favorites"}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    width: "80%",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
