import {
  View,
  Text,
  Pressable,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors, { secondary } from "@/constants/Colors";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import LocationOn from "@/assets/images/location-on.svg";

type Props = {
  currentLocation?: string;
};

const HeaderSearch = ({ currentLocation }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Link
      href='/map-modal'
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
          <LocationOn width={30} height={30} />
          <Text
            style={{
              color: Colors[colorScheme ?? "light"].text,
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            {"Şu anki konumunuz: " + currentLocation &&
              "Kıbrıs Şehitleri, Alsancak"}
          </Text>
        </View>
        <FontAwesome
          name='chevron-down'
          size={20}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default HeaderSearch;
