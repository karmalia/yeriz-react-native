import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { natural30, primaryOne, textColor } from "@/constants/colors";

import LoginLayout from "@/components/(login)/layout";

import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";

import Poppins from "@/constants/font";
import { Link, useNavigation } from "expo-router";
import Icons from "@/components/shared/icons/icons";

const LoginPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [userForm, setUserForm] = React.useState({
    username: "",
    password: "",
  });

  const handleUsername = (text: string) => {
    setUserForm({ ...userForm, username: text });
  };

  const handlePassword = (text: string) => {
    setUserForm({ ...userForm, password: text });
  };

  return (
    <LoginLayout>
      <View
        style={{
          marginTop: 80,
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <View style={styles.loginForm}>
          <ThemedInput
            leftIcon="UserIcon"
            value={userForm.username}
            onChangeText={handleUsername}
            placeholder="Kullanıcı adınızı giriniz"
            label="Kullanıcı Adı"
          />
          <ThemedInput
            leftIcon="LockIcon"
            rightIcon="EyeOffIcon"
            value={userForm.password}
            onChangeText={handlePassword}
            placeholder="Şifrenizi giriniz"
            label="Şifre"
          />
          <Text
            style={{
              color: natural30,
              alignSelf: "flex-end",
              width: "100%",
              textDecorationLine: "underline",
              fontSize: 14,
              fontFamily: Poppins.Regular,
              textAlign: "right",
              paddingRight: 20,
            }}
          >
            Şifremi Unuttum
          </Text>
        </View>

        <View style={styles.buttons}>
          <ThemedButton
            size="medium"
            style={{ width: "100%" }}
            variant="secondary"
          >
            <Link
              href={{
                pathname: "/register",
                params: { from: "(login)" },
              }}
            >
              Giriş Yap
            </Link>
          </ThemedButton>
        </View>

        {/* Horizontal */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
          }}
        >
          <View
            style={{
              width: "40%",
              height: 2,
              backgroundColor: primaryOne,
            }}
          />
          <Text
            style={{
              color: primaryOne,
              fontSize: 16,
              fontFamily: Poppins.Regular,
              marginHorizontal: 10,
            }}
          >
            veya
          </Text>
          <View
            style={{
              width: "40%",
              height: 2,
              backgroundColor: primaryOne,
            }}
          />
        </View>
        {/* Login Options */}
        <View>
          <Icons.GoogleEnglishSignIn />
        </View>
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: "100%",
    rowGap: 12,
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
