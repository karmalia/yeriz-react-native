import React from "react";
import { View } from "react-native";
import { Svg, Defs, Rect, Mask, Circle } from "react-native-svg";
const WrappedCircle = () => (
  <View style={{ aspectRatio: 1 }}>
    <Svg height="100%" width="100%" viewBox="0 0 100 100">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Circle r="35" cx="50" cy="50" />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.5)"
        mask="url(#mask)"
        fill-opacity="0"
      />
    </Svg>
  </View>
);

export default WrappedCircle;
