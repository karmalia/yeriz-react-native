import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect } from "react";
import MapOverlay from "../map-overlay/map-overlay";
import useGoogleMapStore from "@/stores/googleMapStore";
import RestaurantMarkers from "./restaurant-markers";
const mapHeight = Dimensions.get("window").height;

const GoogleMap = () => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } =
    useGoogleMapStore();

  return (
    <>
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
      <MapOverlay mapHeight={mapHeight} />
    </>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
