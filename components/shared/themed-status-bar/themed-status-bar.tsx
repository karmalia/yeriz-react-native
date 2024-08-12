import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

type Props = {};

const ThemedStatusBar = (props: Props) => {
  return <StatusBar style={"dark"} />;
};

export default ThemedStatusBar;
