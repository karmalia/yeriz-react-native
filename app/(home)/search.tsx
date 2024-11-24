import { Dimensions, StyleSheet, TextInput } from "react-native";
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
import CompanyCard from "@/components/cards/company-card";
import debounce from "@/lib/utils/bounce";
import { TCompanyCard } from "@/components/cards/card.types";
import dummyCompanies from "@/dummy-datas/dummyCompanies.json";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import useFilterStore from "@/stores/filterStore";
import NotFoundCompanies from "@/components/(search)/not-found-companies";
import FilterBar from "@/components/(search)/filter-bar";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const pathname = usePathname();
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
            company.name.toLowerCase().includes(term.toLowerCase())
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
    } else {
      filterStore.toggleFilterBar(false);
    }
  };

  React.useEffect(() => {
    fetchSearchResults(searchTerm);
  }, []);

  React.useEffect(() => {
    if (params?.focus === "true" && searchBarRef.current) {
      searchBarRef.current.focus();
    }
  }, [pathname]);

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
        {filterStore.isFilterBarOpen && <FilterBar />}
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
        {!filterStore.isFilterBarOpen && (
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
        {filterStore.isFilterBarOpen && (
          <>
            {!loading && (
              <>
                {searchResults.filter((item) => {
                  return item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                }).length > 0 ? (
                  <FlatList
                    data={searchResults.filter((item) => {
                      return item.name
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
