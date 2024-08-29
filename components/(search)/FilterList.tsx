import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import NewProductCard from "../cards/new-product-card";

type FilterListProps = {
  data: any;
  setFilterState: any;
};

const FilterList = ({ setFilterState, data }: FilterListProps) => {
  const [prevScroll, setPrevScroll] = React.useState(0);
  return (
    <FlatList
      data={data}
      style={{ width: "100%" }}
      renderItem={({ item }) => <NewProductCard data={item} />}
      keyExtractor={(item) => item.id + "search"}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 4,
            backgroundColor: "transparent",
          }}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        marginTop: 10,
      }}
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
