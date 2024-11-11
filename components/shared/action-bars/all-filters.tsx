import { View, Text } from "react-native";
import React from "react";
import useFilterStore from "@/stores/filterStore";
import Mulish from "@/constants/font";
import {
  natural10,
  natural20,
  primaryFive,
  primaryOne,
} from "@/constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const AllFilters = () => {
  const filterStore = useFilterStore();

  const Filters = [
    {
      id: "filters-1",
      title: "Sıralama",
      data: filterStore.orderings.data,
      isMultiSelect: false,
      changingFunction: filterStore.changeOrdering,
    },
    {
      id: "filters-2",
      title: "Mutfak",
      data: filterStore.kitchens.data,
      isMultiSelect: true,
      changingFunction: filterStore.changeKitchens,
    },
    {
      id: "filters-3",
      title: "Ödeme Türleri",
      data: filterStore.paymentTypes.data,
      isMultiSelect: true,
      changingFunction: filterStore.changePaymentTypes,
    },
    {
      id: "filters-4",
      title: "Minimum Sepet Tutarı",
      data: filterStore.minOrderAmounts.data,
      isMultiSelect: false,
      changingFunction: filterStore.changeMinOrderAmounts,
    },
    {
      id: "filters-5",
      title: "Puan",
      data: filterStore.filterByPoint.data,
      isMultiSelect: false,
      changingFunction: filterStore.changeFilterByPoint,
    },
  ];

  return (
    <>
      {Filters.map((filter) => (
        <View
          key={filter.id}
          style={{
            width: "100%",
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderColor: primaryOne,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 12,
              color: natural20,
              fontFamily: Mulish.SemiBold,
            }}
          >
            {filter.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              paddingHorizontal: 12,
              gap: 12,
            }}
          >
            {filter.data.map((orderItem) => (
              <TouchableOpacity
                onPress={() => {
                  filter.changingFunction(orderItem);
                }}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 8,
                  backgroundColor: orderItem.isActive ? primaryFive : "white",
                  borderWidth: 1,
                  borderColor: natural20,
                }}
                key={orderItem.name}
              >
                <Text
                  style={{
                    fontFamily: Mulish.Regular,
                    textAlign: "center",
                    color: "black",
                  }}
                  key={orderItem.name}
                >
                  {orderItem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </>
  );
};

export default AllFilters;
