import { Link, Stack, useLocalSearchParams, usePathname } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
export default function NotFoundScreen() {
  const params = useLocalSearchParams();
  const pathname = usePathname();
  console.log("NotFound params", params);
  console.log("NotFound pathame", pathname);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesnt exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
