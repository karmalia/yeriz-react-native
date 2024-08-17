import React, { ReactElement, ReactNode } from "react";
import {
  Dimensions,
  DimensionValue,
  Text,
  View,
  ViewStyle,
} from "react-native";

interface SvgEnhancerProps {
  children?: ReactElement<{ width?: string; height?: string }>;
  aspectRatio: number;
  style: ViewStyle;
}

const Placeholder = () => {
  return <Text>Place Holder</Text>;
};

export default function SvgEnhancer({
  children,
  aspectRatio,
  style,
}: SvgEnhancerProps) {
  const containerStyle: ViewStyle = {
    width: style?.width || "auto",
    height: style?.height || "auto",
    aspectRatio,
    margin: "auto",
  };

  let content: ReactElement;

  if (React.isValidElement(children)) {
    // Clone the child element and pass the width and height props automatically
    content = React.cloneElement(children, {
      width: "100%",
      height: "100%",
    });
  } else {
    // Render Placeholder if no children are provided
    content = <Placeholder />;
  }

  return <View style={containerStyle}>{content}</View>;
}
