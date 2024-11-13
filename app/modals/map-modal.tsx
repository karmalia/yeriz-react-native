import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { natural10, natural20, primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";
import Icons from "@/components/shared/icons/icons";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import ThemedRange from "@/components/shared/themed-range/themed-range";
import GoogleMap from "@/components/map/google-map";
import calculateDeltas from "@/lib/utils/calculateDelta";
import MapHeader from "@/components/map/map-header";
import ThemedText from "@/components/shared/themed-text/themed-text";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
import useGoogleMapStore from "@/stores/googleMapStore";
import { useGetNearbyCompanies } from "@/api/queries/company/get-nearby-companies";
import ReText from "@/components/shared/ReText";
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function ModalScreen() {
  const progress = useSharedValue(10);

  const min = useSharedValue(1);
  const max = useSharedValue(25);
  const {
    zoomLevel,
    changeZoomLevel,
    latitudeDelta,
    changeDistanceArranged,
    latitude,
    longitude,
  } = useGoogleMapStore();
  // State to hold formatted progress for display

  // Derived value for formatted display without rerendering
  const derivedDisplayProgress = useDerivedValue(() => {
    return `${progress.value.toFixed(1)} km`;
  });

  const { keyboardMetrics } = useKeyboardState();
  return (
    <View style={styles.container}>
      <MapHeader />

      <GoogleMap />

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
            min={min}
            max={max}
            progress={progress}
            onSlidingStart={(value: number) => {
              changeZoomLevel(value);
              changeDistanceArranged(true);
            }}
            onSlidingComplete={(value: number) => {
              changeZoomLevel(value);
              changeDistanceArranged(false);
            }}
          />
          <ReText text={derivedDisplayProgress} />
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
    </View>
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
    justifyContent: "space-around",
    gap: 20,
    paddingVertical: 20,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  progressText: {
    fontSize: 14,
    color: natural10,
  },
  text: {
    fontFamily: Mulish.Regular,
    fontSize: 14,
    color: natural20,
  },

  title: {
    fontSize: 20,
    fontFamily: Mulish.Black,
    color: primaryOne,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
