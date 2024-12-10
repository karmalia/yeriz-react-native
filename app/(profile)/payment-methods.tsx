import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const PaymentMethods = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>PaymentMethods</Text>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
});
