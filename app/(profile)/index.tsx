import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { buttonShadow, natural20, natural40 } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import ProfileButton from "@/components/shared/profile/profile-button";

type Props = {};

const buttons = [
  {
    Icon: <Ionicons name="person-outline" size={20} color={natural20} />,
    name: "Hesap Detaylarım",
    link: "/(profile)/personal-info",
  },
  {
    Icon: <Ionicons name="notifications-outline" size={22} color={natural20} />,
    name: "Bildirimler",
    link: "/(profile)/notifications",
  },
  {
    Icon: <Ionicons name="card-outline" size={22} color={natural20} />,
    name: "Ödeme Yöntemleri",
    link: "/(profile)/payment-methods",
  },
];

const Index = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {buttons.map((button) => {
        return (
          <ProfileButton
            key={button.name}
            name={button.name}
            link={button.link}
            push={router.push}
            Icon={button?.Icon}
          />
        );
      })}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 20,
    borderColor: natural40,
    width: Dimensions.get("window").width * 0.8,
    height: 52,
    ...buttonShadow,
  },
});
