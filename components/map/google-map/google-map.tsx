import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect } from "react";
import MapOverlay from "../map-overlay/map-overlay";
import useGoogleMapStore from "@/stores/googleMapStore";
import RestaurantMarkers from "./restaurant-markers";

const GoogleMap = () => {
  const { latitude, longitude, latitudeDelta, longitudeDelta, zoomLevel } =
    useGoogleMapStore();

  return (
    <View style={styles.map}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: Number(latitudeDelta),
          longitudeDelta: Number(longitudeDelta),
        }}
        rotateEnabled={false}
        scrollEnabled={true}
        zoomEnabled={false}
      >
        <RestaurantMarkers />
      </MapView>
      <MapOverlay />
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: "relative",
  },
});
