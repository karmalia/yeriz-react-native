import { StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basket</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 16,

    textAlign: "left",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
