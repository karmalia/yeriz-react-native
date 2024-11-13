import { StyleSheet, View } from "react-native";
import React from "react";
import { TKitchenCard } from "@/components/cards/card.types";
import KitchenCard from "@/components/cards/kitchen-card";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link, usePathname } from "expo-router";
import Icons from "@/components/shared/icons/icons";
import { FlatList } from "react-native-gesture-handler";
import Mulish from "@/constants/font";
import { natural30 } from "@/constants/colors";
import useFilterStore, { IFilterItem } from "@/stores/filterStore";

const KitchenSlider = () => {
  const filterStore = useFilterStore();

  return (
    <View // Section Piece
    >
      <View style={styles.titleWrapper}>
        <ThemedText style={styles.title}>{"Mutfak"}</ThemedText>

        <Link href={`/modals/kitchens-modal`}>
          <View style={styles.linkWrapper}>
            <ThemedText style={styles.linkText}>Tümünü göster</ThemedText>
            <Icons.ChevronRight
              width={14}
              height={14}
              style={styles.iconStyle}
            />
          </View>
        </Link>
      </View>

      <FlatList
        style={{
          width: "100%",
        }}
        data={filterStore.kitchens.data.filter((k) => k.value !== "all")}
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
              <KitchenCard data={item as IFilterItem} />
            </View>
          );
        }}
        keyExtractor={(item: any) => {
          return item.name + "KitchenSlider";
        }}
      />
    </View>
  );
};

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

export default KitchenSlider;
