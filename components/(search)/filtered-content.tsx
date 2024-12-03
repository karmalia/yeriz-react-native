import { StyleSheet, Text, View } from "react-native";
import React from "react";
import KitchenSlider from "../(home)/index/kitchen-slider";
import { FlatList } from "react-native-gesture-handler";
import useFilterStore from "@/stores/filterStore";
import { useSearchedCompanies } from "@/api/queries/search/get-searched-companies";
import useGoogleMapStore from "@/stores/googleMapStore";
import CompanyCard from "../cards/company-card";
import AnimatedSpinner from "../shared/spinner/spinner";
import { secondaryThree } from "@/constants/colors";

const FilteredContent = () => {
  const { latitude, longitude, zoomLevel } = useGoogleMapStore();
  const { kitchens, searchTerm, isActive, refetchId } = useFilterStore();
  console.log("isActive", isActive);
  const { data, isLoading, isError } = useSearchedCompanies(
    {
      filters: {
        cuisineCategoryIds: [
          ...kitchens.data
            .filter((k) => k.isActive && !k.defaultItem)
            .map((kitchen) => kitchen.value),
        ],
      },
      searchTerm: searchTerm,
      location: {
        latitude: latitude,
        longitude: longitude,
        distance: zoomLevel * 1000,
      },
    },
    `filtered-content-${refetchId}`
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedSpinner variant="primary" color={secondaryThree} />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data}
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item }) => {
          return <CompanyCard data={item} />;
        }}
        keyExtractor={(item) => item.id + "search"}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 12,
              backgroundColor: "transparent",
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default FilteredContent;
