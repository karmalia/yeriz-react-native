import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  natural20,
  natural30,
  natural40,
  primaryOne,
} from "@/constants/colors";
import Icons from "../shared/icons/icons";
import ThemedText from "../shared/themed-text/themed-text";

type Props = {};

const buttons = [
  {
    name: "Kişisel Bilgilerim",
    link: "/profile/personal-info",
  },
  {
    name: "Sepet Geçmişim",
    link: "/profile/basket-history",
  },
  {
    name: "Ayarlar",
    link: "/profile/settings",
  },
  {
    name: "Yardım",
    link: "/profile/help",
  },
];

const ProfileLinks = (props: Props) => {
  return (
    <View style={styles.container}>
      {buttons.map((button) => {
        return (
          <View style={styles.button}>
            <Text
              style={{
                color: natural20,
                fontSize: 14,
              }}
            >
              {button.name}
            </Text>
            <Icons.ChevronRight
              style={{
                color: primaryOne,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProfileLinks;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    paddingTop: 20,
    zIndex: -1,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: natural20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 20,
    borderColor: natural40,
    width: Dimensions.get("window").width * 0.8,
    height: 52,
  },
});
