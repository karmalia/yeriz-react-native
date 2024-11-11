import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "../shared/icons/icons";
import ThemedText from "../shared/themed-text/themed-text";
import { primaryOne } from "@/constants/colors";

type Props = {};

const NotFoundCompanies = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Icons.NotFoundCompaniesIcon />
      <ThemedText
        style={{
          color: primaryOne,
          textAlign: "center",
          width: "50%",
          fontSize: 20,
        }}
      >
        Üzgünüm... Aradığın seçeneklere uygun sonuç bulamadım.
      </ThemedText>
    </View>
  );
};

export default NotFoundCompanies;

const styles = StyleSheet.create({});
