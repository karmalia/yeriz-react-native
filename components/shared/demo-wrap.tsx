// components/ScreenWrapper.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

const ScreenWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Add your desired padding here
  },
});

export default ScreenWrapper;
