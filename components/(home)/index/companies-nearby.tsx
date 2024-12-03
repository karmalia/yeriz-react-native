import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchedCompanies } from "@/api/queries/search/get-searched-companies";
import useGoogleMapStore from "@/stores/googleMapStore";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CompanyHomeCard from "@/components/cards/company-home-card";
import { TCompanyCard } from "@/components/cards/card.types";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Icons from "@/components/shared/icons/icons";
import { natural30 } from "@/constants/colors";
import useFilterStore from "@/stores/filterStore";
import { useRouter } from "expo-router";
import Mulish from "@/constants/font";

const ShowAllButton = () => {
  const router = useRouter();
  const { changeOrdering, orderings } = useFilterStore();
  return (
    <TouchableOpacity
      onPress={() => {
        changeOrdering(
          orderings.data.find((ordering) => ordering.name === "Yakınlık")!
        );
        router.push("/modals/filtered-restaurants");
      }}
    >
      <View style={styles.linkWrapper}>
        <ThemedText style={styles.linkText}>Tümünü göster</ThemedText>
        <Icons.ChevronRight width={14} height={14} style={styles.iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

const CompaniesNearby = () => {
  const { latitude, longitude, zoomLevel } = useGoogleMapStore();
  const { data, isLoading, isError } = useSearchedCompanies(
    {
      filters: {
        cuisineCategoryIds: [],
        //ordering stilleri yukarıdan gelecek: Yaındakiler için yakındakiler filtresi gönderilecek
      },
      location: {
        latitude,
        longitude,
        distance: zoomLevel * 1000,
      },
    },
    "Yakınlık"
  );
  console.log("CompaniesNearby Rendered");
  return (
    <>
      <View style={styles.titleWrapper}>
        <ThemedText style={styles.title}>{"Yakındakiler"}</ThemedText>

        <ShowAllButton />
      </View>
      {data && (
        <FlatList
          style={{
            width: "100%",
          }}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: 8,
                  marginLeft: 12,
                }}
              >
                <CompanyHomeCard data={item as TCompanyCard} />
              </View>
            );
          }}
          keyExtractor={(item: any) => item.id + "productSection"}
        />
      )}
    </>
  );
};

export default CompaniesNearby;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingBottom: 60,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: Mulish.Regular,
    height: 24,
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 4,
  },
  linkText: {
    fontSize: 12,
    color: natural30,
  },
  iconStyle: {
    color: natural30,
    marginBottom: 2,
  },
});
