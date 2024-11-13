import {
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
type Props = {};

const MapHeader = (props: Props) => {
  StatusBar.setBackgroundColor("white");
  const navigation = useNavigation();

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
          rightIcon={"SearchIcon"}
        />
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
  },
});
