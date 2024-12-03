import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetCompanyById } from "@/api/queries/companies/get-all-company-byid";
import { useLocalSearchParams } from "expo-router";
import { CompanyFood } from "@/api/queries/companies/companies.types";
import { contentWhite, natural30 } from "@/constants/colors";
import Mulish from "@/constants/font";
import { useGetCompanyFoods } from "@/api/queries/companies/get-company-foods";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ProductCard from "../cards/product-card";

type Props = {
  companyId: number | string;
  setCurrentHeight: React.Dispatch<React.SetStateAction<number>>;
};

function MealsSlider({ companyFood }: { companyFood: CompanyFood }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 4,
      }}
    >
      <Text
        style={{
          fontFamily: Mulish.Bold,
          fontSize: 18,
          color: "black",
          paddingLeft: 24,
          marginBottom: 8,
        }}
      >
        {companyFood.category || "Kategori Adı"}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={companyFood.data}
        renderItem={(data) => {
          return <ProductCard data={data.item} variant="small" />;
        }}
        contentContainerStyle={{ paddingLeft: 24, gap: 8, paddingBottom: 8 }}
      />
    </View>
  );
}

const Meals = ({ companyId }: Props) => {
  const { data, isLoading, isError } = useGetCompanyFoods(String(companyId));

  if (isLoading) {
    return (
      <View>
        <Text>Yükleniyor</Text>
      </View>
    );
  }

  const Sections: {
    category: string | null;
    data: any[];
  }[] =
    data?.map((item) => ({
      category: item.category,
      data: item.data,
    })) || [];

  return (
    <ScrollView style={styles.container}>
      {Sections.map((section) => (
        <MealsSlider companyFood={section} />
      ))}
    </ScrollView>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    elevation: 4,
    marginTop: 6,
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
