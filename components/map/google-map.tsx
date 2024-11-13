import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect } from "react";
import MapOverlay from "./map-overlay/map-overlay";
import useGoogleMapStore from "@/stores/googleMapStore";
import { useGetAllCompanies } from "@/api/queries/company/get-all-companies";
import { useGetNearbyCompanies } from "@/api/queries/company/get-nearby-companies";

const mapHeight = Dimensions.get("window").height;

const GoogleMap = () => {
  const {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    zoomLevel,
    distanceArranged,
  } = useGoogleMapStore();

  const { isLoading, error, data } = useGetNearbyCompanies(
    latitude,
    longitude,
    zoomLevel
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading companies: {error.message}</Text>;
  }

  return (
    <>
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
        scrollEnabled={true}
        zoomEnabled={false}
      >
        {<Marker coordinate={{ latitude, longitude }} title="You are here" />}
        {data &&
          data.map((company) => (
            <Marker
              key={company.id}
              coordinate={{
                latitude: company.lat,
                longitude: company.long,
              }}
              title={company.name}
              description={company.companyTypeName}
              onPress={() => {
                // Handle marker press
                console.log(`Marker pressed: ${company.name}`);
              }}
            />
          ))}
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
