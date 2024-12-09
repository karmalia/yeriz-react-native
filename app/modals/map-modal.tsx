import { StyleSheet } from "react-native";
import * as React from "react";
import { View } from "react-native";

import GoogleMap from "@/components/map/google-map/google-map";
import MapHeader from "@/components/map/map-header";
import MapFooter from "@/components/map/map-footer";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <MapHeader />
      <GoogleMap />
      <MapFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
