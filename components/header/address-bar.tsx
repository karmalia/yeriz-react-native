import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  natural20,
  natural30,
  primaryOne,
  secondaryOne,
} from "@/constants/colors";
import { Link, usePathname, useRouter } from "expo-router";
import Icons from "../shared/icons/icons";
import { StatusBar } from "expo-status-bar";
import useGoogleMapStore from "@/stores/googleMapStore";
import * as Location from "expo-location";
import Mulish from "@/constants/font";
import ThemedText from "../shared/themed-text/themed-text";
import { retriveAdress } from "@/lib/utils/retrive-address";
import { useGetReverseGeolocation } from "@/api/queries/geocoding/get-reverse-geocoding";

const AddressBar = () => {
  const pathname = usePathname();

  const { changeLocation, latitude, longitude, changeCurrentAddress } =
    useGoogleMapStore();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { data, isLoading, isError } = useGetReverseGeolocation(
    latitude,
    longitude
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        router.navigate("/modals/map-modal");

        return;
      }

      let { coords } = await Location.getCurrentPositionAsync();
      if (coords.latitude !== latitude || coords.longitude !== longitude) {
        changeLocation(
          coords.latitude,

          coords.longitude
        );
      }
    }

    getCurrentLocation();
  }, []);

  React.useEffect(() => {
    if (data) {
      changeCurrentAddress(
        retriveAdress(data.data.results[0].address_components) || "Unknown"
      );
    }
  }, [isLoading]);

  const router = useRouter();
  const { currentAddress } = useGoogleMapStore();
  const isMapModal = pathname === "/modals/map-modal";
  return (
    <TouchableOpacity
      onPress={() => {
        if (pathname !== "/modals/map-modal")
          router.navigate("/modals/map-modal");
      }}
      style={styles.header}
    >
      <Icons.LocationOn
        width={30}
        height={30}
        color={isMapModal ? secondaryOne : primaryOne}
      />

      <ThemedText
        style={{
          fontFamily: Mulish.Regular,
          lineHeight: 20,
          paddingTop: 2,
          fontSize: 18,
          color: natural30,
        }}
      >
        {currentAddress || "Lütfen bir konum belirleyiniz"}
      </ThemedText>
      {isLoading && <ActivityIndicator size="small" color={primaryOne} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
});

export default AddressBar;
