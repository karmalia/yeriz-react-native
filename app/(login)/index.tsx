import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  natural10,
  natural30,
  primaryOne,
  textColor,
} from "@/constants/colors";

import LoginLayout from "@/components/(login)/layout";
import LoginButton from "@/components/(login)/LoginButton";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useNavigation } from "expo-router";
import Poppins from "@/constants/font";

const LoginPage = () => {
  const [userForm, setUserForm] = React.useState({
    username: "",
    password: "",
  });
  const { navigate } = useNavigation();
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
            variant="secondary"
            style={{ width: 150 }}
            onPress={() => navigate("(demo)")}
          >
            Kayıt Ol (demo)
          </ThemedButton>
          <ThemedButton
            size="medium"
            style={{ width: 150 }}
            variant="secondary"
            outline
            onPress={() => navigate("(home)")}
          >
            Giriş Yap (home)
          </ThemedButton>
        </View>
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: "80%",
    rowGap: 14,
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
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  textInput: {
    height: 52,
    backgroundColor: "white",
    paddingLeft: 34,
    fontSize: 16,
  },
});

export default LoginPage;
