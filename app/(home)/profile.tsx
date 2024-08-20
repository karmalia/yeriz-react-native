import { StyleSheet } from "react-native";
import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ThemedButton
        size="small"
        variant="primary"
        onPress={() => router.navigate("/(login)")}
      >
        <ThemedText
          variant="primary"
          style={{ color: "white", textAlign: "center" }}
        >
          Login Page
        </ThemedText>
      </ThemedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
