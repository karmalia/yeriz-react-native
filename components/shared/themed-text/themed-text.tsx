import { Text, TextProps } from "react-native";
import React from "react";

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  style?: any;
}

const ThemedText = (props: ThemedTextProps) => {
  return (
    <Text {...props} style={[props?.style, { color: "black", paddingTop: 6 }]}>
      {props.children}
    </Text>
  );
};

export default ThemedText;
