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
import { green, textColor } from "@/constants/Colors";
import Logo from "../assets/images/YerizLogo.svg";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(196, 218, 182, 0.17)", "rgba(108, 160, 75, 0.35)"]}
        style={styles.wrapper}
      >
        <Logo width={100} height={100} />
        <View style={styles.loginForm}>
          <View style={styles.inputView}>
            <Text style={styles.text}>Kullanıcı Adı:</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.textInput} />
              <FontAwesome
                name='user'
                style={{
                  position: "absolute",
                  top: 15,
                  left: 10,
                  color: green,
                }}
                size={24}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.text}>Şifre:</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                secureTextEntry={showPassword}
                style={styles.textInput}
              />

              <FontAwesome
                name='lock'
                style={{
                  position: "absolute",
                  top: 15,
                  left: 10,
                  color: green,
                }}
                size={24}
              />

              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 15,
                  right: 10,
                }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FontAwesome name='eye-slash' size={24} color={green} />
                ) : (
                  <FontAwesome name='eye' size={24} color={green} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[
              styles.btn,
              {
                backgroundColor: green,
              },
            ]}
          >
            <Text style={[styles.btntext, { color: "white" }]}>Kayıt Ol</Text>
          </Pressable>
          <Pressable
            style={[
              styles.btn,
              {
                backgroundColor: "white",
              },
            ]}
            onPress={() => navigation.navigate("(tabs)")}
          >
            <Text style={[styles.btntext, { color: green }]}>Giriş Yap</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

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
  loginForm: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    rowGap: 20,
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

    fontFamily: "Poppins_400Regular",
  },
  textInput: {
    height: 52,
    backgroundColor: "white",
    paddingLeft: 34,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
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
    borderColor: green,
  },
  btntext: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Poppins_400Regular",
  },
});

export default LoginPage;
