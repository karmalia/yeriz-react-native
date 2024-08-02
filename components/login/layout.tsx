import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "@assets/images/YerizLogo.svg";
import { orange, textColor } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation, usePathname } from "expo-router";
type Props = {};

const buttonsLookup = {
  "/": [
    {
      text: "Kayıt Ol",
      tab: "(login)",
      screen: "register",
    },
    {
      text: "Giriş Yap",
      tab: "(login)",
      screen: "index",
    },
  ],
  "/register": [
    {
      text: "Geri Dön",
      tab: "(login)",
      screen: "index",
    },
    {
      text: "Kayıt Ol",
      tab: "(login)",
      screen: "index",
    },
  ],
  "/forgotPassword": [
    {
      text: "Geri Dön",
      tab: "(login)",
      screen: "index",
    },
    {
      text: "Şifremi Sıfırla",
      tab: "(login)",
      screen: "index",
    },
  ],
  "/resetPassword": [
    {
      text: "Geri Dön",
      tab: "(login)",
      screen: "index",
    },
    {
      text: "Şifremi Sıfırla",
      tab: "(login)",
      screen: "index",
    },
  ],
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();

  const pathname = usePathname();

  const buttons = buttonsLookup[pathname as keyof typeof buttonsLookup];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 1)", "rgba(255, 227, 127, 1)"]}
        style={styles.wrapper}
      >
        <Logo width={138} height={193} />
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  wrapper: {
    height: "80%",
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },

  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: orange,
  },
  btntext: {
    fontSize: 16,
    fontWeight: "400",
  },
});
