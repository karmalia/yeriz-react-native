import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { buttonShadow, natural20, natural40 } from "@/constants/colors";
import Icons from "../icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  name: string | React.ReactNode;
  link: string;
  Icon?: React.ReactNode;
  push: any;
};

const ProfileButton = ({ name, link, Icon, push }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        push(link as any);
      }}
      activeOpacity={1}
      style={styles.button}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {Icon && Icon}
        <Text
          style={{
            color: natural20,
            fontSize: 14,
          }}
        >
          {name}
        </Text>
      </View>

      <Icons.ChevronRight
        style={{
          color: natural20,
        }}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",

    paddingHorizontal: 20,
    borderColor: natural40,
    width: Dimensions.get("window").width * 0.8,
    height: 52,
    ...buttonShadow,
  },
});
