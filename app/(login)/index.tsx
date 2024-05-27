import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { orange, textColor } from "@/constants/Colors";
import Logo from "../../assets/images/YerizLogo.svg";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import LoginLayout from "@/components/(login)/layout";
import LoginInput from "@/components/(login)/LoginInput";
import LoginButton from "@/components/(login)/LoginButton";
const LoginPage = () => {
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
      <View style={styles.loginForm}>
        <LoginInput
          label='Kullanıcı Adı'
          leftIcon='user'
          placeholder='kullanıcı adınızı giriniz'
          value={userForm.username}
          onChange={handleUsername}
        />
        <LoginInput
          label='Şifre'
          leftIcon='lock'
          rightIcon={"eye-slash"}
          placeholder='şifrenizi giriniz'
          value={userForm.password}
          onChange={handlePassword}
          secureTextEntry={true}
        />
        <Text
          style={{
            color: textColor,
            width: "100%",
            textDecorationLine: "underline",
            fontSize: 12,
            fontFamily: "Poppins",
            textAlign: "right",
            paddingRight: 20,
          }}
        >
          Şifremi Unuttum
        </Text>
      </View>

      <View style={styles.buttons}>
        <LoginButton text='Kayıt Ol' index={0} />
        <LoginButton text='Giriş Yap' index={1} />
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    rowGap: 14,
  },
  inputView: {
    width: "80%",
    gap: 10,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  text: {
    color: textColor,
    fontSize: 12,

    fontFamily: "Poppins",
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 52,
    backgroundColor: "white",
    paddingLeft: 34,
    fontSize: 16,
  },
});

export default LoginPage;
