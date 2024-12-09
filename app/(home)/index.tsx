import * as React from "react";
import {
  Dimensions,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";

import dummyDataProduct from "../../dummy-datas/dummyDataProduct.json";
import dummyDataProduct2 from "../../dummy-datas/dummyDataProduct2.json";
import dummyDataKitchen from "../../dummy-datas/dummyDataKitchen.json";

import { TKitchenCard, TProductCard } from "@/components/cards/card.types";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link, useRouter } from "expo-router";
import { contentWhite, natural30, primaryOne } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Mulish from "@/constants/font";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "@/components/cards/product-card";
import KitchenCard from "@/components/cards/kitchen-card";
import Advertisement from "@/components/(home)/advertisement/advertisement";
import KitchenSlider from "@/components/(home)/index/kitchen-slider";
import HomeCompanySlider from "@/components/(home)/index/home-company-slider";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import useFilterStore, { IFilterItem } from "@/stores/filterStore";
import CompaniesNearby from "@/components/(home)/index/companies-nearby";
import CompaniesMostRated from "@/components/(home)/index/companies-most-rated";
import { StatusBar } from "expo-status-bar";

const SearchBar = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/(home)/search?focus=true");
      }}
    >
      <ThemedInput
        placeholder="Ne Yesem?"
        style={{
          borderColor: primaryOne,
          height: 42,
          marginVertical: 20,
          width: Dimensions.get("window").width * 0.9,
          alignSelf: "center",
        }}
        rightIcon={"SearchIcon"}
        value={""}
        onChangeText={(text) => null}
        editable={false}
      />
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const Sections: {
    title: {
      hasLink: boolean;
      title: string;
      action: (data: IFilterItem) => void | null;
      value: IFilterItem;
    } | null;
    data: (TProductCard | TKitchenCard)[];
    Component: ({ section }: { section: any }) => React.JSX.Element;
  }[] = [
    {
      title: null,
      data: [],
      Component: SearchBar,
    },
    {
      title: null,
      data: [],
      Component: Advertisement,
    },
    {
      title: null,
      data: [],
      Component: KitchenSlider,
    },
    {
      title: null,
      data: [],
      Component: CompaniesNearby,
    },
    {
      title: null,
      data: [],
      Component: CompaniesMostRated,
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={Sections}
        renderSectionHeader={({ section }) => {
          const Component = section.Component;
          return <Component section={section} />;
        }}
        renderItem={({ item }) => {
          return null;
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={{ height: 80 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "white",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
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
