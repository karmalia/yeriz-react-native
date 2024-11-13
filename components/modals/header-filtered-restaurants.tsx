import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ThemedText from "../shared/themed-text/themed-text";
import { primaryOne } from "@/constants/colors";
import Icons from "../shared/icons/icons";
import Constants from "expo-constants";
import Mulish from "@/constants/font";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderFilteredRestaurants = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  console.log("HeaderFilteredRestaurants params", params);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 18,
        height: 90,
        borderBottomColor: "rgba(0,0,0,0.1)",
        backgroundColor: primaryOne,
        gap: 14,
        position: "relative",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Icons.ChevronRight
          width={24}
          height={24}
          style={{
            transform: [{ rotate: "180deg" }],
            color: "white",
          }}
        />
      </TouchableOpacity>

      <ThemedText
        style={{
          fontSize: 20,
          color: "white",
          textAlign: "center",
          flex: 1,
          fontFamily: Mulish.Regular,
        }}
      >
        {params?.title ? params.title : "Filtrelenmiş Restoranlar"}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HeaderFilteredRestaurants;
