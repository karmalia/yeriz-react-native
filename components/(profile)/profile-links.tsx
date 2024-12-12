import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  buttonShadow,
  natural20,
  natural30,
  natural40,
  primaryOne,
} from "@/constants/colors";
import Icons from "../shared/icons/icons";
import ThemedText from "../shared/themed-text/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import ProfileButton from "../shared/profile/profile-button";

type Props = {};

const buttons = [
  {
    Icon: <Ionicons name="person-outline" size={20} color={natural20} />,
    name: "Profilim",
    link: "/(profile)",
  },
  {
    Icon: <Ionicons name="help-circle-outline" size={20} color={natural20} />,
    name: "Yardım",
    link: "/(help)/",
  },
  {
    Icon: <Ionicons name="lock-closed-outline" size={20} color={natural20} />,
    name: "KVKK ve Gizlilik",
    link: "/(help)/how-it-works",
  },
  // {
  //   Icon: <Ionicons name="storefront-outline" size={20} color={natural20} />,
  //   name: "Bizyeriz'e katılın",
  //   link: "/(help)/join-us",
  // },
];

const ProfileLinks = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {buttons.map((button, i) => {
        return (
          <ProfileButton
            key={button.name + i}
            name={button.name}
            link={button.link}
            Icon={button.Icon}
            push={router.push}
          />
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
    zIndex: -1,
    paddingVertical: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    ...buttonShadow,
    paddingHorizontal: 20,
    borderColor: natural40,
    width: Dimensions.get("window").width * 0.8,
    height: 52,
  },
});
