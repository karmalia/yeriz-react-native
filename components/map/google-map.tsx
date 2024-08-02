import { StyleSheet, Text, View } from "react-native";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";

type Props = {};

const GoogleMap = (props: Props) => {
  const generateRandomLocation = (
    latitude: number,
    longitude: number,
    radius: number
  ) => {
    const r = radius / 111300; // 1 degree of latitude = 111.3 km
    const x = latitude + Math.random() * r * 2 - r;
    const y = longitude + Math.random() * r * 2 - r;
    return { latitude: x, longitude: y };
  };

  const generateLocations = () => {
    const locations: { latitude: number; longitude: number }[] = [];

    for (let i = 0; i < 20; i++) {
      let radius = 0;
      if (i < 10) {
        radius = 10000; // 10 km
      } else if (i < 15) {
        radius = 15000; // 15 km
      } else {
        radius = 20000; // 20 km
      }

      const location = generateRandomLocation(38.43859, 27.143772, radius);
      locations.push(location);
    }

    return locations;
  };

  const locations = generateLocations();

  console.log(locations);

  // Use the locations array in your code as needed

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      ></View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 38.43859,
          longitude: 27.143772,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker
          coordinate={locations[0]}
          icon={require("@/assets/images/location-on.svg")}
        />
      </MapView>
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
