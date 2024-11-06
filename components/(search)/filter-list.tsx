import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import NewProductCard from "../cards/new-product-card";
import CompanyCard from "../cards/company-card";
import { TCompanyCard } from "../cards/card.types";

type FilterListProps = {
  data: TCompanyCard[];
  setFilterState: any;
};

const FilterList = ({ setFilterState, data }: FilterListProps) => {
  const [prevScroll, setPrevScroll] = React.useState(0);
  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        alignItems: "center",
      }}
      renderItem={({ item }) => <CompanyCard data={item} />}
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
      onScroll={(e) => {
        if (!e.nativeEvent.contentOffset.y) return;

        if (e.nativeEvent.contentOffset.y > prevScroll) {
          setPrevScroll(e.nativeEvent.contentOffset.y);
          setFilterState(false);
        } else {
          setPrevScroll(e.nativeEvent.contentOffset.y);
          setFilterState(true);
        }
      }}
    />
  );
};

export default FilterList;
