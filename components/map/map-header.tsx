import {
  ActivityIndicator,
  DeviceEventEmitter,
  Dimensions,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import {
  natural10,
  natural20,
  natural30,
  primaryOne,
} from "@/constants/colors";
import Mulish from "@/constants/font";
import Icons from "../shared/icons/icons";
import { useNavigation } from "expo-router";
import ThemedText from "../shared/themed-text/themed-text";
import ThemedInput from "../shared/themed-input/themed-input";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Constants from "expo-constants";
import { useGetAutoComplete } from "@/api/queries/auto-complete/get-auto-complete";
import uuid from "react-native-uuid";

import useGoogleMapStore from "@/stores/googleMapStore";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useGetLocationById } from "@/api/queries/geocoding/get-locationbyid";
import { retriveAdress } from "@/lib/utils/retrive-address";
import AddressBar from "../header/address-bar";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
const array = new Uint8Array([1, 2, 3, 4, 5]);

const MapHeader = () => {
  const [place, setPlace] = React.useState("");
  const [placeId, setPlaceId] = React.useState("");
  const { hideKeyboard } = useKeyboardState();
  const [sessionToken, setSessionToken] = React.useState<string | null>(null);
  const { changeLocation, changeCurrentAddress } = useGoogleMapStore();
  const {
    data: locationByIdData,
    isLoading: locationByIdLoading,
    isError: locationByIdError,
  } = useGetLocationById(placeId);

  const { data, isLoading, isError } = useGetAutoComplete(place, sessionToken);

  React.useEffect(() => {
    // Generate a session token when the component mounts

    setSessionToken(uuid.v4());
  }, []);

  const handleInputChange = (text: string) => {
    if (!sessionToken) {
      setSessionToken(uuid.v4());
    }
    setPlace(text);
  };

  useEffect(() => {
    if (locationByIdData) {
      const address = retriveAdress(
        locationByIdData.results[0].address_components
      );
      changeCurrentAddress(address);

      try {
        changeLocation(
          locationByIdData.results[0].geometry.location.lat,
          locationByIdData.results[0].geometry.location.lng
        );
      } catch (error) {
        console.log("Map Change Eror", error);
      }
    }
  }, [locationByIdData, locationByIdError, locationByIdLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <ThemedInput
          placeholder="Konum Ara"
          style={{
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: primaryOne,
            height: 40,
          }}
          rightIcon={place.length > 4 ? "CloseIcon" : "SearchIcon"}
          rightIconOnPress={place.length > 4 ? () => setPlace("") : null}
          value={place}
          onChangeText={handleInputChange}
        />
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            marginHorizontal: 20,
          }}
        >
          {data && place.length > 0 && (
            <View
              style={{
                backgroundColor: "white",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: primaryOne,
                maxHeight: 200,
                overflow: "scroll",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginTop: 5,
                elevation: 12,
                shadowColor: natural10,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              {isLoading && (
                <ActivityIndicator size="small" color={primaryOne} />
              )}
              {data?.suggestions.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    setPlaceId(item.placePrediction.placeId);
                    hideKeyboard();
                    setPlace("");
                  }}
                  key={item.placePrediction.placeId}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    height: 30,
                  }}
                >
                  <Icons.LocationOn width={20} height={20} color={primaryOne} />
                  <ThemedText
                    style={{
                      fontFamily: Mulish.Regular,
                      lineHeight: 20,
                      paddingTop: 2,
                      fontSize: 16,
                      color: natural30,
                    }}
                  >
                    {item.placePrediction.text.text.slice(0, 40)}
                  </ThemedText>
                  <ActivityIndicator
                    size="small"
                    color={primaryOne}
                    animating={locationByIdLoading}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MapHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: 10,
    paddingBottom: 20,

    backgroundColor: "white",
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    flex: 1,
    position: "relative",
    paddingHorizontal: 20,
  },
});
