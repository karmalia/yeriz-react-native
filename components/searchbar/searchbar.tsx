import { View, Text, TextInputComponent } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { green } from "@/constants/colors";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: green,
      }}
    >
      <TextInputComponent
        style={{
          height: 40,
          margin: 12,
        }}
        placeholder="Ara..."
        onChangeText={(text) => console.log(text)}
      />
      <View>
        <FontAwesome name="search" size={24} color="white" />
      </View>
    </View>
  );
};

export default SearchBar;
