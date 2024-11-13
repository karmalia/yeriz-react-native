import { StyleSheet, View } from "react-native";
import React from "react";

import { FlatList } from "react-native-gesture-handler";

import KitchenCard from "@/components/cards/kitchen-card";
import useFilterStore from "@/stores/filterStore";
import { StatusBar } from "expo-status-bar";

const ListcardModals = () => {
  const filterStore = useFilterStore();

  const createPairs = (data: any) => {
    const pairs = [];
    for (let i = 1; i < data.length; i += 2) {
      pairs.push([data[i], data[i + 1]]);
    }
    return pairs;
  };

  const KitchenList = ({ data }) => {
    const pairs = createPairs(data); // Transform data into pairs

    return (
      <FlatList
        data={pairs}
        keyExtractor={(item, index) => `pair-${index}`}
        style={{
          paddingHorizontal: 20,
          backgroundColor: "white",
          flex: 1,
          paddingVertical: 20,
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <View style={styles.cardContainer}>
                <KitchenCard data={item[0]} />
              </View>
              {item[1] ? (
                <View style={styles.cardContainer}>
                  <KitchenCard data={item[1]} />
                </View>
              ) : (
                <View style={styles.cardContainer} /> // Empty space if no second item
              )}
            </View>
          );
        }}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    );
  };

  return (
    <>
      <StatusBar style="auto" />
      <KitchenList data={filterStore.kitchens.data} />
    </>
  );
};

export default ListcardModals;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 20,
  },
});
