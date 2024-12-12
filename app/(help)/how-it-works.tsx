import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>HowItWorks</Text>
    </View>
  );
};

export default HowItWorks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
