import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "react-native";
import { Link } from "expo-router";
import Poppins from "@/constants/font";
import ThemedText from "@/components/shared/themed-text/themed-text";

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
