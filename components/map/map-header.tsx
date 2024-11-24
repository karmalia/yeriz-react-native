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
import React from "react";
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
import Animated from "react-native-reanimated";
const array = new Uint8Array([1, 2, 3, 4, 5]);
const MapHeader = () => {
  StatusBar.setBackgroundColor("white");
  const [place, setPlace] = React.useState("");
  const [sessionToken, setSessionToken] = React.useState<string | null>(null);
  const navigation = useNavigation();

  const { data, isLoading, isError } = useGetAutoComplete(place, sessionToken);

  console.log(
    "data",
    data?.data?.suggestions.map((item) => item.placePrediction)
  );
  console.log("isLoading", isLoading);
  console.log("isError", isError);
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
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
            Kıbrıs şehitleri, Alsancak
          </ThemedText>
        </View>
        <Icons.CloseIcon
          width={20}
          height={20}
          style={{ color: primaryOne }}
          onPress={() => navigation.goBack()}
        />
      </View>
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
            top: 50,
            left: 0,
            right: 0,
          }}
        >
          {data && (
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
              }}
            >
              {isLoading && (
                <ActivityIndicator size="small" color={primaryOne} />
              )}
              {data?.data?.suggestions.map((item) => (
                <View
                  key={item.placePrediction.id}
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
                </View>
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
    height: 150,
    display: "flex",
    width: Dimensions.get("window").width,
    flexDirection: "column",
    justifyContent: "space-around",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,

    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    position: "relative",
  },
});
