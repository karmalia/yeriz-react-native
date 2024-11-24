import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useFilterStore from "@/stores/filterStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { natural40, primaryOne } from "@/constants/colors";
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
      {filterStore[filterStore.content].data.map((filterItem) => {
        return (
          <TouchableOpacity
            onPress={() => {
              filterItem.action(filterItem);
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: "white",

              borderWidth: 1,
              borderColor: filterItem.isActive ? primaryOne : natural40,
            }}
            key={filterItem.name}
          >
            <Text
              style={{
                fontFamily: Mulish.Regular,
                textAlign: "center",
                color: filterItem.isActive ? primaryOne : "black",
              }}
            >
              {filterItem.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterStoreContents;
