import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Mulish from "@/constants/font";
import { natural30, primaryOne } from "@/constants/colors";
import Constants from "expo-constants";
import ThemedText from "../shared/themed-text/themed-text";
import Meals from "./meals";
import { ScrollView } from "react-native-gesture-handler";

const MetricsSection = () => (
  <View style={styles.metricsContainer}>
    <MetricCard
      title="Azalan CO2 Ayak izi"
      imageSrc={require("@/assets/images/company-modal/Carbon.png")}
      value="null kg"
    />
    <MetricCard
      title="Günlük Engellenen Gıda İsrafı"
      imageSrc={require("@/assets/images/company-modal/Order.png")}
      value="null Sipariş"
    />
  </View>
);

// Metric Card Component
const MetricCard = ({ title, imageSrc, value }) => (
  <View style={styles.metricCard}>
    <ThemedText style={styles.metricTitle}>{title}</ThemedText>
    <View style={styles.metricContent}>
      <Image source={imageSrc} style={styles.metricImage} />
      <ThemedText style={styles.metricValue}>{value}</ThemedText>
    </View>
  </View>
);

const CompanyContent = ({ companyId }: { companyId: number | string }) => {
  return (
    <>
      <MetricsSection />

      <Meals companyId={companyId} />
    </>
  );
};

export default CompanyContent;

const styles = StyleSheet.create({
  metricsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,

    backgroundColor: "white",
  },
  metricCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  metricTitle: {
    fontSize: 16,
    fontFamily: Mulish.Bold,
    color: "black",
    textAlign: "center",
  },
  metricContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metricImage: {
    width: 30,
    height: 30,
  },
  metricValue: {
    fontSize: 16,
    fontFamily: Mulish.Regular,
    color: "black",
  },
});
