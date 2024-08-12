import { StyleSheet, Text, View } from "react-native";
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

type Coordinates = {
  latitude: number;
  longitude: number;
};

const GoogleMap = ({
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
}: GoogleMapProps) => {
  function generateRandomLocations(
    center: Coordinates,
    numLocations: number,
    maxDistanceKm: number
  ): Coordinates[] {
    const locations: Coordinates[] = [];
    const radians = (deg: number): number => (deg * Math.PI) / 180;

    for (let i = 0; i < numLocations; i++) {
      // Random distance and bearing
      const distanceKm = maxDistanceKm;
      const bearing = 360;

      // Convert distance to angular distance in radians
      const angularDistance = distanceKm / 6371; // Earth's radius in km

      // Convert bearing to radians
      const bearingRad = radians(bearing);

      const centerLatRad = radians(center.latitude);
      const centerLonRad = radians(center.longitude);

      // Calculate new latitude
      const newLatRad = Math.asin(
        Math.sin(centerLatRad) * Math.cos(angularDistance) +
          Math.cos(centerLatRad) *
            Math.sin(angularDistance) *
            Math.cos(bearingRad)
      );

      // Calculate new longitude
      const newLonRad =
        centerLonRad +
        Math.atan2(
          Math.sin(bearingRad) *
            Math.sin(angularDistance) *
            Math.cos(centerLatRad),
          Math.cos(angularDistance) -
            Math.sin(centerLatRad) * Math.sin(newLatRad)
        );

      // Convert back to degrees
      const newLatitude = newLatRad * (180 / Math.PI);
      const newLongitude = newLonRad * (180 / Math.PI);

      locations.push({
        latitude: newLatitude,
        longitude: newLongitude,
      });
    }

    return locations;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        {[
          ...generateRandomLocations(
            {
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta,
            },
            20,
            1
          ),
        ].map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={marker}
              title={"Test"}
              description={"Test"}
            />
          );
        })}
      </MapView>
      <MapOverlay />
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
