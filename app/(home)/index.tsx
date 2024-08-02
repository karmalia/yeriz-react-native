import * as React from "react";
import { Image, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import { Link } from "expo-router";
import Poppins from "@/constants/font";
import ThemedText from "@/components/shared/themed-text/themed-text";
const logo = require("@/assets/images/icon.png");
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText
        style={{
          fontFamily: Poppins.Black,
          fontSize: 32,
        }}
      >
        Keşfet Page
      </ThemedText>
      <Link href={"/(login)"} style={{ color: "blue" }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: logo }}
        />
        <ThemedText
          style={{
            fontFamily: Poppins.Regular,
            fontSize: 32,
          }}
        >
          Whereas disregard and contempt for human rights have resulted
        </ThemedText>
      </Link>
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
