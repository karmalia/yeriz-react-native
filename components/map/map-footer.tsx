import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "../shared/icons/icons";
import { natural20, primaryOne, secondaryThree } from "@/constants/colors";
import ReText from "@/components/shared/ReText";
import * as Location from "expo-location";
type Props = {};
import { Alert, Linking } from "react-native";
import useGoogleMapStore from "@/stores/googleMapStore";
import ThemedRange from "../shared/themed-range/themed-range";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
import { TouchableOpacity } from "react-native-gesture-handler";
import Mulish from "@/constants/font";
import ThemedButton from "../shared/themed-button/themed-button";
import ThemedText from "../shared/themed-text/themed-text";
import { useRouter } from "expo-router";
const MapFooter = (props: Props) => {
  const min = useSharedValue(1);
  const max = useSharedValue(25);
  const router = useRouter();
  const { changeZoomLevel, zoomLevel, changeDistanceArranged, changeLocation } =
    useGoogleMapStore();
  const progress = useSharedValue(zoomLevel);
  const { keyboardMetrics, keyboardState } = useKeyboardState();

  const derivedDisplayProgress = useDerivedValue(() => {
    return `${progress.value.toFixed(1)} km`;
  });

  const handleLocationRequest = async () => {
    let { status } = await Location.getForegroundPermissionsAsync();

    if (status === "granted") {
      // İzin verilmişse, konumu alın
      let location = await Location.getCurrentPositionAsync();
      changeLocation(location.coords.latitude, location.coords.longitude);
    } else if (status === "denied") {
      // İzin reddedilmişse, kullanıcıyı uyar
      Alert.alert(
        "Konum İzni Gerekli",
        "Mevcut konumu kullanabilmek için konum izni vermeniz gerekiyor. Lütfen ayarlardan izin verin.",
        [
          { text: "İptal", style: "cancel" },
          {
            text: "Ayarları Aç",
            onPress: () => Linking.openSettings(),
          },
        ]
      );
    } else {
      // İzin durumu bilinmiyor veya "prompt" göstermek mümkünse, tekrar iste
      let { status: newStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (newStatus === "granted") {
        let location = await Location.getCurrentPositionAsync();
        changeLocation(location.coords.latitude, location.coords.longitude);
      }
    }
  };

  return (
    <View style={[styles.filter]}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 60,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          paddingVertical: 10,
          position: "absolute",
          borderTopEndRadius: 25,
          borderTopLeftRadius: 25,
          top: -40,
          left: 0,
        }}
      >
        <ThemedRange
          min={min}
          max={max}
          progress={progress}
          onSlidingStart={() => {
            changeDistanceArranged(true);
          }}
          onSlidingComplete={(value: number) => {
            changeZoomLevel(value);
            changeDistanceArranged(false);
          }}
        />
        <ReText text={derivedDisplayProgress} />
      </View>

      <TouchableOpacity
        onPress={handleLocationRequest}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: primaryOne,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <Icons.LocationOn
          width={20}
          height={20}
          style={{
            color: secondaryThree,
          }}
        />
        <Text style={styles.text}>Şu anki konumu kullan</Text>
      </TouchableOpacity>

      <ThemedButton
        variant="primary"
        size="medium"
        style={{ width: "80%", borderRadius: 8 }}
        onPress={() => router.back()}
      >
        <ThemedText>Seçimi Uygula</ThemedText>
      </ThemedButton>
    </View>
  );
};

export default MapFooter;

const styles = StyleSheet.create({
  filter: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 20,
    paddingVertical: 20,

    position: "relative",
  },
  text: {
    fontFamily: Mulish.Regular,
    fontSize: 14,
    color: natural20,
  },
});
