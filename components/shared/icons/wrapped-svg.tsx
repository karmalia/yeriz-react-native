import React from "react";
import { View } from "react-native";

const WrappedSvg = (children: any) => (
  <View style={{ aspectRatio: 1, backgroundColor: "blue" }}>{children}</View>
);

export default WrappedSvg;
