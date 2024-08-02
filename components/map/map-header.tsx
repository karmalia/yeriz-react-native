import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { natural10, natural20, natural30 } from "@/constants/colors";
import Poppins from "@/constants/font";
import Icons from "../shared/icons/icons";
import { useNavigation } from "expo-router";
import ThemedText from "../shared/themed-text/themed-text";

type Props = {};

const MapHeader = (props: Props) => {
  const statusBarHeight = StatusBar.currentHeight || 0;
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: statusBarHeight + 40,

          backgroundColor: "#fff",
          borderWidth: 1,
        },
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Icons.LocationOn width={30} height={30} />

        <ThemedText
          style={{
            fontFamily: Poppins.Medium,
            lineHeight: 20,
            paddingTop: 8,
            fontSize: 18,
            color: natural10,
          }}
        >
          Kıbrıs şehitleri, Alsancak
        </ThemedText>
      </View>
      <Icons.CloseIcon
        width={30}
        height={30}
        fill={natural30}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default MapHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
    borderColor: natural30,
    position: "relative",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
  },
});
