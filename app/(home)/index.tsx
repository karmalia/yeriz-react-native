import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "react-native";
import { Link } from "expo-router";
import Poppins from "@/constants/font";
import ThemedText from "@/components/shared/themed-text/themed-text";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/(login)"}>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
