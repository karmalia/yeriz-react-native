import { StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Favoriler Page</Text>
    </View>
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
