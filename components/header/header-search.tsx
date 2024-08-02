import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import React from "react";
import Colors, { natural10, natural30 } from "@/constants/colors";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Icons from "../shared/icons/icons";

type Props = {
  currentLocation?: string;
};

const HeaderSearch = ({ currentLocation }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Link
      href="/modals/map-modal"
      style={{
        width: "100%",
        height: 60,
      }}
      asChild
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Icons.LocationOn width={30} height={30} />
          <Text
            style={{
              // color: Colors[colorScheme ?? "light"].text,
              color: natural30,
              fontSize: 18,

              fontWeight: "600",
            }}
          >
            {"Şu anki konumunuz: " + currentLocation &&
              "Kıbrıs Şehitleri, Alsancak"}
          </Text>
        </View>
        <Icons.ChevronDown width={30} height={30} />
      </TouchableOpacity>
    </Link>
  );
};

export default HeaderSearch;
