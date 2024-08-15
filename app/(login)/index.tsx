import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Dimensions,
  ToastAndroid,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import {
  natural30,
  primaryOne,
  secondaryOne,
  textColor,
} from "@/constants/colors";

import LoginLayout from "@/components/(login)/layout";

import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";

import Poppins from "@/constants/font";
import { Link, useNavigation } from "expo-router";
import { AppleTurkishSignIn } from "@/components/shared/icons/login.icons";

import GoogleLogo from "@/assets/images/login/google-tr-s.svg";
import FacebookLogo from "@/assets/images/login/facebook-tr-s.svg";

import { TouchableOpacity } from "react-native-gesture-handler";

const LoginPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <LoginLayout>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text
          style={{
            color: secondaryOne,
            fontSize: 16,
            fontFamily: Poppins.SemiBold,
            alignSelf: "flex-start",
          }}
        >
          Üye ol veya Giriş yap
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Google Sign In");
            // navigation.navigate("Register");
          }}
        >
          <GoogleLogo />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Facebook Sign In");
            // navigation.navigate("Register");
          }}
        >
          <FacebookLogo />
        </TouchableOpacity>

        {Platform.OS === "ios" && <AppleTurkishSignIn />}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <View style={styles.horizontalLine} />
          <Text style={styles.middleText}>veya</Text>
          <View style={styles.horizontalLine} />
        </View>
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: "100%",
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: secondaryOne,
  },
  middleText: {
    color: secondaryOne,
    fontFamily: Poppins.Regular,
  },

  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  text: {
    color: textColor,
    fontSize: 12,
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    height: 52,
    backgroundColor: "white",
    paddingLeft: 34,
    fontSize: 16,
  },
});

export default LoginPage;
