import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { natural20, primaryOne } from "@/constants/colors";
import { Link } from "expo-router";
import Icons from "../shared/icons/icons";

type Props = {
  currentLocation?: string;
};

const HeaderSearch = ({ currentLocation }: Props) => {
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
              color: natural20,
              fontSize: 18,

              fontWeight: "600",
            }}
          >
            {"Şu anki konumunuz: " + currentLocation &&
              "Kıbrıs Şehitleri, Alsancak"}
          </Text>
        </View>

        <Icons.ChevronDown
          style={{
            color: primaryOne,
          }}
          width={34}
          height={34}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default HeaderSearch;
