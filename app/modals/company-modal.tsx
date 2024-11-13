import { StyleSheet, View } from "react-native";
import React from "react";

import { FlatList } from "react-native-gesture-handler";

import KitchenCard from "@/components/cards/kitchen-card";
import useFilterStore from "@/stores/filterStore";
import { StatusBar } from "expo-status-bar";

const CompanyModal = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View>test</View>
    </>
  );
};

export default CompanyModal;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 20,
  },
});
