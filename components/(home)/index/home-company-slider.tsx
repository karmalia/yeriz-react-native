import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TCompanyCard, TKitchenCard } from "@/components/cards/card.types";
import KitchenCard from "@/components/cards/kitchen-card";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { Link, useRouter } from "expo-router";
import Icons from "@/components/shared/icons/icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Mulish from "@/constants/font";
import { natural30 } from "@/constants/colors";
import CompanyCard from "@/components/cards/company-card";
import dummyCompanies from "@/dummy-datas/dummyCompanies.json";
import CompanyHomeCard from "@/components/cards/company-home-card";
import { IFilterItem } from "@/stores/filterStore";

type HomeCompanySliderProps = {
  section: {
    title: {
      title: string;
      hasLink: boolean;
      action: (data: IFilterItem) => void;
      value: IFilterItem;
    };
    data: TCompanyCard[];
  };
};

const HomeCompanySlider = ({ section }: HomeCompanySliderProps) => {
  const router = useRouter();
  const { title, hasLink } = section.title;
  return (
    <>
      <View style={styles.titleWrapper}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        {hasLink && (
          <TouchableOpacity
            onPress={() => {
              section.title.action(section.title.value);
              router.push("/modals/filtered-restaurants");
            }}
          >
            <View style={styles.linkWrapper}>
              <ThemedText style={styles.linkText}>Tümünü göster</ThemedText>
              <Icons.ChevronRight
                width={14}
                height={14}
                style={styles.iconStyle}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        style={{
          width: "100%",
        }}
        data={dummyCompanies}
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
    </>
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

export default HomeCompanySlider;
