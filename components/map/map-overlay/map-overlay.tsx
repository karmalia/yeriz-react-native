import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import WrappedSvg from "@/components/shared/icons/wrapped-svg";
import WrappedCircle from "../wrapped-circle/wrapped-circle";

const MapOverlay = () => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: "100%",

        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0)",
        top: 0,
        left: 0,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WrappedCircle />
    </View>
  );
};

export default MapOverlay;
