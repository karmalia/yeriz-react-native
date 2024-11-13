import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useFilterStore from "@/stores/filterStore";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Icons from "../shared/icons/icons";
import { primaryFive, primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";

const FilterBar = () => {
  const filterStore = useFilterStore();

  const FilteringList = [
    {
      name: "Sıralama",
      contentName: "orderings",
      isDefault: filterStore.orderings.isDefault,
      data: filterStore.orderings.data,
    },
    {
      name: "Mutfaklar",
      contentName: "kitchens",
      isDefault: filterStore.kitchens.isDefault,
      data: filterStore.kitchens.data,
    },
    {
      name: "Ödeme Yöntemleri",
      contentName: "paymentTypes",
      isDefault: filterStore.paymentTypes.isDefault,
      data: filterStore.paymentTypes.data,
    },
    {
      name: "Minimum Sepet Tutarı",
      contentName: "minOrderAmounts",
      isDefault: filterStore.minOrderAmounts.isDefault,
      data: filterStore.minOrderAmounts.data,
    },
    {
      name: "Puan",
      contentName: "filterByPoint",
      isDefault: filterStore.filterByPoint.isDefault,
      data: filterStore.filterByPoint.data,
    },
  ];

  const isEveryFilterDefault = FilteringList.every(
    (filter) => filter.isDefault
  );
  return (
    <View
      style={{
        height: 30,
        width: "100%",
        paddingLeft: 18,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          gap: 4,
        }}
      >
        <TouchableOpacity
          style={{
            width: 30,
          }}
          onPress={() => {
            filterStore.toogleActionBar(!filterStore.isActive);
            filterStore.changeContent("filters");
          }}
        >
          {isEveryFilterDefault ? (
            <Icons.FilterIconPassive width={30} height={30} />
          ) : (
            <Icons.FilterIconActive width={30} height={30} />
          )}
        </TouchableOpacity>

        <FlatList
          horizontal
          data={
            isEveryFilterDefault
              ? FilteringList
              : FilteringList.filter((filter) => !filter.isDefault)
          }
          renderItem={({ item }) => {
            const activeOption = item.data.find((i) => i.isActive);
            return (
              <TouchableOpacity
                onPress={() => {
                  filterStore.changeContent(item.contentName as any);
                  filterStore.toogleActionBar(true);
                }}
                style={{
                  borderWidth: 1,
                  height: 30,
                  borderColor: primaryOne,
                  borderRadius: 4,
                  backgroundColor: activeOption?.defaultItem
                    ? "white"
                    : primaryFive,
                  flexDirection: "row",
                  paddingHorizontal: 8,
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    color: primaryOne,
                    fontSize: 12,
                  }}
                >
                  {item?.name} : {activeOption?.name}
                </Text>
                <Icons.ChevronDown width={16} height={16} color={primaryOne} />
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() =>
            !isEveryFilterDefault ? (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  height: 30,
                  borderColor: primaryOne,
                  borderRadius: 4,
                  backgroundColor: primaryFive,
                  flexDirection: "row",
                  paddingHorizontal: 8,
                  alignItems: "center",
                  marginHorizontal: 8,
                  gap: 4,
                }}
                onPress={() => {
                  filterStore.resetFilter();
                }}
              >
                <Text
                  style={{
                    color: primaryOne,
                    fontFamily: Mulish.SemiBold,
                    fontSize: 12,
                  }}
                >
                  Temizle
                </Text>
                <Icons.CloseIcon width={12} height={12} color={primaryOne} />
              </TouchableOpacity>
            ) : (
              <View style={{ width: 8 }} />
            )
          }
        />
      </View>
    </View>
  );
};

export default FilterBar;
