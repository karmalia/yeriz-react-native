import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useFilterStore from "@/stores/filterStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  contentWhite,
  natural40,
  primaryFive,
  primaryOne,
} from "@/constants/colors";
import Mulish from "@/constants/font";

const FilterStoreContents = () => {
  const filterStore = useFilterStore();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 10,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
      {filterStore[filterStore.content].data.map((orderItem) => {
        return (
          <TouchableOpacity
            onPress={() => {
              orderItem.action(orderItem);
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: "white",

              borderWidth: 1,
              borderColor: orderItem.isActive ? primaryOne : natural40,
            }}
            key={orderItem.name}
          >
            <Text
              style={{
                fontFamily: Mulish.Regular,
                textAlign: "center",
                color: orderItem.isActive ? primaryOne : "black",
              }}
            >
              {orderItem.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterStoreContents;
