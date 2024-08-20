import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import {
  natural20,
  primaryOne,
  secondaryOne,
  textColor,
} from "@/constants/colors";

import LoginLayout from "@/components/(login)/layout";

import ThemedButton from "@/components/shared/themed-button/themed-button";

import Poppins from "@/constants/font";
import { Link, useRouter } from "expo-router";

import Icons from "@/components/shared/icons/icons";
import ThemedText from "@/components/shared/themed-text/themed-text";

const LoginPage = () => {
  const router = useRouter();
  return (
    <LoginLayout>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 12,
          marginTop: 40,
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

        <ThemedButton
          variant="secondary"
          outline
          size="small"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            borderWidth: 2,
            borderRadius: 12,
          }}
        >
          <Icons.GoogleLogo width={22} height={22} />
          <ThemedText
            style={{ color: primaryOne, fontFamily: Poppins.SemiBold }}
          >
            Google ile devam et
          </ThemedText>
        </ThemedButton>

        <ThemedButton
          variant="secondary"
          outline
          size="small"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            borderWidth: 2,
            borderRadius: 12,
          }}
        >
          <Icons.FacebookLogo width={22} height={22} />

          <Text style={{ color: primaryOne, fontFamily: Poppins.SemiBold }}>
            Facebook ile devam et
          </Text>
        </ThemedButton>

        {Platform.OS === "ios" && (
          <ThemedButton
            variant="secondary"
            outline
            size="small"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 10,
              width: "100%",
              borderWidth: 2,
              borderRadius: 12,
            }}
          >
            <Icons.AppleLogo width={22} height={22} />
            <Text style={{ color: primaryOne, fontFamily: Poppins.SemiBold }}>
              AppleID ile devam et
            </Text>
          </ThemedButton>
        )}
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

        <ThemedButton
          variant="secondary"
          size="small"
          outline
          style={{
            width: "100%",
            borderRadius: 12,
            borderWidth: 2,
          }}
          onPress={() => router.navigate("/(login)/email-login")}
        >
          <ThemedText
            style={{ color: primaryOne, fontFamily: Poppins.SemiBold }}
          >
            E-posta ile devam et
          </ThemedText>
        </ThemedButton>
        <ThemedButton
          variant="secondary"
          size="small"
          outline
          style={{
            width: "100%",
            borderRadius: 12,
            borderWidth: 2,
          }}
          onPress={() => router.navigate("/(login)/email-login")}
        >
          <ThemedText
            style={{ color: primaryOne, fontFamily: Poppins.SemiBold }}
          >
            Telefon ile devam et
          </ThemedText>
        </ThemedButton>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
            paddingTop: 12,
          }}
        >
          <ThemedText
            style={{
              color: natural20,
            }}
          >
            Hesabınız yok mu?
          </ThemedText>
          <Link href={"/(login)/register"}>
            <ThemedText variant="primary">Üye Ol!</ThemedText>
          </Link>
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
