import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect } from "react";
import MapOverlay from "./map-overlay/map-overlay";
import useGoogleMapStore from "@/stores/googleMapStore";
type GoogleMapProps = {
  radius: number;
};

const GoogleMap = ({ radius }: GoogleMapProps) => {
  const {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    zoomLevel,
    distanceArranged,
  } = useGoogleMapStore();

  useEffect(() => {
    console.log("zoomLevel", zoomLevel);
  }, [distanceArranged]);

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
        region={{
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
