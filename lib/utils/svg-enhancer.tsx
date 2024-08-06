import React, { ReactNode } from "react";
import { Dimensions, DimensionValue, View, ViewStyle } from "react-native";

interface SvgEnhancerProps {
  children: ReactNode;
  aspectRatio: number;
  containerWidth?: DimensionValue;
  containerHeight?: DimensionValue;
}

export default function SvgEnhancer({
  children,
  aspectRatio,
  containerHeight,
}: SvgEnhancerProps) {
  const containerStyle: ViewStyle = {
    width: Dimensions.get("window").width * 0.8,
    height: containerHeight || "auto",
    aspectRatio,
    margin: "auto",
  };

  return (
    <View style={containerStyle}>
      {
        // @ts-ignore
        children({
          width: "100%",
          height: "100%",
        })
      }
    </View>
  );
}
