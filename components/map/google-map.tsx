import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";
import MapOverlay from "./map-overlay/map-overlay";
type GoogleMapProps = {
  latitude: number;
  longitude: number;
  latitudeDelta: string;
  longitudeDelta: string;
  radius: number;
};

const GoogleMap = ({
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
}: GoogleMapProps) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: Number(latitudeDelta),
          longitudeDelta: Number(longitudeDelta),
        }}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      ></MapView>
      <MapOverlay />
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height * 0.6,
    width: Dimensions.get("window").width,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: -1,
    top: Dimensions.get("window").height * 0.11,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height * 0.7,
  },
});
