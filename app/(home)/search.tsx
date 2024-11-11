import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import Icons from "@/components/shared/icons/icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import { contentWhite, primaryFive, primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  usePathname,
} from "expo-router";
import FilterSidebar from "@/components/(home)/search/filter-sidebar";
import CompanyCard from "@/components/cards/company-card";
import debounce from "@/lib/utils/bounce";
import { TCompanyCard } from "@/components/cards/card.types";
import dummyCompanies from "@/dummy-datas/dummyCompanies.json";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import FilterOrderBar from "@/components/shared/action-bars/filter-order-bar";
import useFilterStore, { EOrderingTypes } from "@/stores/filterStore";
import NotFoundCompanies from "@/components/(search)/not-found-companies";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
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

  const debouncedSearch = debounce(fetchSearchResults, 500);

  const handleSearch = (text) => {
    setSearchTerm(text);
    setLoading(true);
    debouncedSearch(text);
    if (text.length >= 3) {
      filterStore.toggleFilterBar(true);
    }
  };

  React.useEffect(() => {
    fetchSearchResults(searchTerm);
  }, []);

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    const onBlur = navigation.addListener("blur", () => {
      setIsFilterOpen(false);
    });

    return () => {
      navigation.removeListener("blur", onBlur);
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

  console.log("filterStore.isFilteringActive", filterStore.isFilteringActive);

  return (
    <View style={styles.container}>
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
            width: "100%",
          }}
        >
          <ThemedInput
            ref={searchBarRef}
            placeholder="Ne Yesem?"
            style={{
              borderColor: primaryOne,
              height: 42,
              width: Dimensions.get("window").width * 0.9,
              alignSelf: "center",
            }}
            rightIcon={"SearchIcon"}
            value={searchTerm}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        {filterStore.isFilteringActive && (
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
        )}
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
          paddingVertical: 8,
        }}
      >
        {/* First Phase */}
        {!filterStore.isFilteringActive && (
          <>
            {!loading && (
              <>
                <KitchenSlider />
                <FlatList
                  data={searchResults}
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
            )}
            {loading && (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AnimatedSpinner variant="primary" color={primaryOne} />
              </View>
            )}
          </>
        )}

        {/* Second Phase */}
        {filterStore.isFilteringActive && (
          <>
            {!loading && (
              <>
                {searchResults.filter((item) => {
                  return item.companyName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                }).length > 0 ? (
                  <FlatList
                    data={searchResults.filter((item) => {
                      return item.companyName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    })}
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
          </>
        )}
      </View>
    </View>
  );
}

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
