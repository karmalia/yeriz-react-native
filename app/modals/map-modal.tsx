import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { natural10, primaryOne } from "@/constants/colors";
import Poppins from "@/constants/font";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import Icons from "@/components/shared/icons/icons";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useSharedValue } from "react-native-reanimated";
import ThemedRange from "@/components/shared/themed-range/themed-range";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GoogleMap from "@/components/map/google-map";
export default function ModalScreen() {
  const [range, setRange] = React.useState(10);
  const progress = useSharedValue(10);
  const min = useSharedValue(1);
  const max = useSharedValue(25);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.mapWrapper}>
        <GoogleMap />
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
            progress={progress}
            min={min}
            max={max}
            setRange={setRange}
          />
          <Text
            style={{
              fontFamily: Poppins.Regular,
              fontSize: 14,
              color: natural10,
            }}
          >
            {range.toFixed()} km
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
