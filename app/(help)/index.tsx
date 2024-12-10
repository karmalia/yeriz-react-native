import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  natural20,
  natural40,
  primaryOne,
  secondaryOne,
} from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import Mulish from "@/constants/font";
import ProfileButton from "@/components/shared/profile/profile-button";

type Props = {};

const buttons = [
  {
    Icon: <Ionicons name="fast-food-outline" size={22} color={primaryOne} />,
    name: "Siparişim Hakkında",
    link: "/(help)/about-order",
  },
  {
    Icon: <Ionicons name="earth-outline" size={22} color={primaryOne} />,
    name: (
      <>
        <Text
          style={{
            color: primaryOne,
            fontFamily: Mulish.Black,
            letterSpacing: 0.5,
          }}
        >
          Bizyeriz
        </Text>{" "}
        Nasıl Çalışıyor?
      </>
    ),
    link: "/(help)/how-it-works",
  },
  {
    Icon: <Ionicons name="storefront-outline" size={22} color={primaryOne} />,
    name: "Bize Katılın!",
    link: "/(help)/join-us",
  },
];

const Index = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {buttons.map((button, i) => {
        return (
          <ProfileButton
            key={button.link + i}
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
    elevation: 2,
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
