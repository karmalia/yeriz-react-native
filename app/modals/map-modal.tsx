import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import {
  natural10,
  natural20,
  natural40,
  primaryOne,
} from "@/constants/colors";
import Poppins from "@/constants/font";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import Icons from "@/components/shared/icons/icons";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import {
  KeyboardState,
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";
import ThemedRange from "@/components/shared/themed-range/themed-range";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GoogleMap from "@/components/map/google-map";
import calculateDeltas from "@/lib/utils/calculateDelta";
import MapHeader from "@/components/map/map-header";
import ThemedText from "@/components/shared/themed-text/themed-text";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
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

  const { keyboardState, keyboardWillShow, keyboardMetrics } =
    useKeyboardState();
  console.log("keyboardMetrics", keyboardMetrics);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <MapHeader />

      <GoogleMap {...region} radius={progress.value * 1000} />

      <View
        style={[
          styles.filter,
          {
            height: keyboardMetrics?.height,
          },
        ]}
      >
        <View
          style={{
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
            borderWidth: 1,
            borderRadius: 8,
            borderColor: primaryOne,
            paddingHorizontal: 12,
            paddingVertical: 4,
          }}
        >
          <Icons.LocationOn width={30} height={30} />
          <Text style={styles.text}>Mevcut konumu kullan</Text>
        </View>

        <ThemedButton
          variant="primary"
          size="medium"
          style={{ width: "80%", borderRadius: 8 }}
        >
          <ThemedText>Seçimi Uygula</ThemedText>
        </ThemedButton>
      </View>
    </GestureHandlerRootView>
  );
}

//Tabbar olarak kullanılabilir
//https://stackoverflow.com/questions/57554335/react-native-bottom-tab-bar-pushing-itself-up-when-opening-keyboard

//Prebuild değiştirildi, googlemap ayarları eklenmeli
//https://stackoverflow.com/questions/77499878/react-native-component-moves-up-with-keyboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  filter: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    paddingVertical: 40,
    gap: 30,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },

  text: {
    fontFamily: Poppins.Regular,
    fontSize: 14,
    color: natural20,
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
