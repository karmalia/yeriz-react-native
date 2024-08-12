import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { natural10, primaryOne } from "@/constants/colors";
import Poppins from "@/constants/font";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import Icons from "@/components/shared/icons/icons";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import ThemedRange from "@/components/shared/themed-range/themed-range";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GoogleMap from "@/components/map/google-map";
import calculateDeltas from "@/lib/utils/calculateDelta";
export default function ModalScreen() {
  const [region, setRegion] = React.useState({
    latitude: 38.43859,
    longitude: 27.143772,
    ...calculateDeltas(10, 38.43859),
  });

  let data = 0;
  // const [range, setRange] = React.useState(0);
  const progress = useSharedValue(10);

  const min = useSharedValue(1);
  const max = useSharedValue(25);

  const derived = useAnimatedReaction(
    () => {
      return Math.floor(progress.value);
    },
    (result, previous) => {
      data = result;
      return result;
    }
  );

  console.log("data", data);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.mapWrapper}>
        <GoogleMap {...region} radius={progress.value * 1000} />
      </View>
      <View style={styles.filter}>
        <View
          style={{
            height: 24,
            width: "80%",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedRange
            setRegion={setRegion}
            progress={progress}
            min={min}
            max={max}
          />
          <Text
            style={{
              fontFamily: Poppins.Regular,
              fontSize: 14,
              color: natural10,
            }}
          >
            {region.latitudeDelta.toFixed(2).substring(2, 4)} km
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Icons.LocationOn width={30} height={30} />
          <Text style={styles.text}>Mevcut konumu kullan</Text>
        </View>
        <ThemedInput
          placeholder="Konum Ara"
          style={{
            alignSelf: "center",
            width: "90%",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: primaryOne,
            height: 40,
          }}
          rightIcon={"SearchIcon"}
        />
        <ThemedButton
          variant="primary"
          size="small"
          style={{ width: "80%", borderRadius: 8, paddingVertical: 8 }}
        >
          Seçimi Uygula
        </ThemedButton>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  filter: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    display: "flex",
    gap: 16,
    paddingTop: 20,
    borderTopEndRadius: 18,
    borderTopLeftRadius: 18,
    borderWidth: 1,
  },

  text: {
    fontFamily: Poppins.Regular,
    fontSize: 14,
    color: natural10,
  },

  mapWrapper: {
    width: "100%",
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: Poppins.Black,
    color: primaryOne,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
