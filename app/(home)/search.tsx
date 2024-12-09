import { Dimensions, StyleSheet, TextInput } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import Icons from "@/components/shared/icons/icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import { contentWhite, primaryFive, primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";
import { useLocalSearchParams, usePathname } from "expo-router";
import CompanyCard from "@/components/cards/company-card";

import AnimatedSpinner from "@/components/shared/spinner/spinner";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import useFilterStore from "@/stores/filterStore";
import NotFoundCompanies from "@/components/(search)/not-found-companies";
import FilterBar from "@/components/(search)/filter-bar";
import useGoogleMapStore from "@/stores/googleMapStore";
import { useSearchedCompanies } from "@/api/queries/search/get-searched-companies";
import DefualtSearchContent from "@/components/(search)/default-search-content";
import FilteredContent from "@/components/(search)/filtered-content";
import debounce from "@/lib/utils/bounce";
import Constants from "expo-constants";
export default function SearchPage() {
  const pathname = usePathname();
  const filterStore = useFilterStore();
  const { latitude, longitude, zoomLevel } = useGoogleMapStore();
  const params = useLocalSearchParams();
  const searchBarRef = React.useRef<null | TextInput>(null);

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
            paddingTop: Constants.statusBarHeight,
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
            value={filterStore.searchTerm}
            onChangeText={(text) =>
              debounce(filterStore.handleSearchTerm(text), 500)
            }
          />
        </View>
        {filterStore.searchTerm.length > 2 && <FilterBar />}
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
        {filterStore.searchTerm.length <= 2 && <DefualtSearchContent />}

        {/* Second Phase */}
        {filterStore.searchTerm.length > 2 && <FilteredContent />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
