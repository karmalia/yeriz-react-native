import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { contentWhite, primaryFive, primaryOne } from "@/constants/colors";
import FilterSidebar from "@/components/(home)/search/filter-sidebar";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import debounce from "@/lib/utils/bounce";
import useFilterStore from "@/stores/filterStore";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { TCompanyCard } from "@/components/cards/card.types";
import dummyCompanies from "@/dummy-datas/dummyCompanies.json";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import CompanyCard from "@/components/cards/company-card";
import NotFoundCompanies from "@/components/(search)/not-found-companies";
type Props = {};

const FilteredRestaurants = (props: Props) => {
  const filterStore = useFilterStore();
  const params = useLocalSearchParams();
  const searchBarRef = React.useRef<null | TextInput>(null);

  const [searchResults, setSearchResults] = React.useState<TCompanyCard[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchSearchResults = async (term) => {
    try {
      // Perform an API request based on the search term
      // const response = await fetch(`@/dummy-datas/dummyCompanies.json`);
      // const data = await response.json();

      setTimeout(() => {
        if (term.length > 3) {
          const results = dummyCompanies.filter((company) =>
            company.companyName.toLowerCase().includes(term.toLowerCase())
          );
          setSearchResults(results as unknown as TCompanyCard[]);
        }
        if (term.length === 0) {
          setSearchResults(dummyCompanies as unknown as TCompanyCard[]);
        }
      }, 300);
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    const onBlur = navigation.addListener("blur", () => {
      setIsFilterOpen(false);
    });

    return () => {
      navigation.removeListener("blur", onBlur);
      filterStore.toogleActionBar(false);
    };
  }, [isFilterOpen]);

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

  useFocusEffect(() => {
    if (params?.focus && searchBarRef.current) {
      searchBarRef.current.focus();
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={[
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            overflow: "hidden",
            paddingVertical: 8,
            backgroundColor: "white",
            width: "100%",
            elevation: 4,
          },
        ]}
      >
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
                    <Icons.ChevronDown
                      width={16}
                      height={16}
                      color={primaryOne}
                    />
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
                    <Icons.CloseIcon
                      width={12}
                      height={12}
                      color={primaryOne}
                    />
                  </TouchableOpacity>
                ) : null
              }
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
          paddingVertical: 8,
        }}
      >
        {!loading && (
          <>
            {searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                contentContainerStyle={{
                  alignItems: "center",
                }}
                renderItem={({ item }) => {
                  console.log("item", item);
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
            ) : (
              <NotFoundCompanies />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default FilteredRestaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: contentWhite,
  },
  filterModal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    width: Dimensions.get("window").width, // Use dynamic width
    height: "100%",
    backgroundColor: "white",
    paddingTop: 20,

    display: "flex",
    flexDirection: "column",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
