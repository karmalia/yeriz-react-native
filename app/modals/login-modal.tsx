import React from "react";
import { Link, Tabs, useRouter } from "expo-router";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import {
  natural20,
  natural30,
  natural40,
  primaryOne,
  secondaryOne,
} from "@/constants/colors";
import { useClientOnlyValue } from "@/lib/hooks/useClientOnlyValue";

import AddressBar from "@/components/header/address-bar";
import Icons from "@/components/shared/icons/icons";

import { TabBars } from "@/components/shared/tabbars/tab-bars";
import Mulish from "@/constants/font";
import LoginLayout from "@/components/(login)/layout";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";
// import { TabBarsNew } from "@/components/shared/tabbars-new/tab-bars-new";

const buttons = [
  {
    icon: Icons.GoogleLogo,
    text: "Google ile devam et",
    platformCondition: true,
    onPress: (router) => {
      // Add your onPress action here
    },
  },
  {
    icon: Icons.FacebookLogo,
    text: "Facebook ile devam et",
    platformCondition: true,
    onPress: (router) => {
      // Add your onPress action here
    },
  },
  {
    icon: Icons.AppleLogo,
    text: "AppleID ile devam et",
    platformCondition: Platform.OS === "ios",
    onPress: (router) => {
      // Add your onPress action here
    },
  },
  {
    text: "E-posta ile devam et",
    platformCondition: true,
    onPress: (router) => {
      router.navigate("/(login)/email-login");
    },
  },
];

const LoginPageModal = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <LoginLayout>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <ThemedText
          style={{
            color: secondaryOne,
            fontSize: 18,
            fontFamily: Mulish.SemiBold,
            alignSelf: "flex-start",
            marginTop: 20,
            marginBottom: 4,
          }}
        >
          Üye ol veya Giriş yap
        </ThemedText>

        {buttons.slice(0, 3).map((button, index) => {
          return (
            <ThemedButton
              key={index}
              variant="secondary"
              outline
              size="small"
              style={styles.button}
              onPress={() => button.onPress(router)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                {button.icon && <button.icon width={20} height={20} />}
                <Text
                  style={{
                    textAlign: "center",
                    color: primaryOne,
                    fontFamily: Mulish.SemiBold,
                    fontSize: width * 0.035,
                  }}
                >
                  {button.text}
                </Text>
              </View>
            </ThemedButton>
          );
        })}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: Dimensions.get("window").height * 0.02,
            height: 12,
          }}
        >
          <View style={styles.horizontalLine} />
          <ThemedText style={styles.middleText}>veya</ThemedText>
          <View style={styles.horizontalLine} />
        </View>

        {buttons[3].platformCondition && (
          <ThemedButton
            variant="secondary"
            size="small"
            outline
            style={styles.button}
            onPress={() => buttons[3].onPress(router)}
          >
            <Text
              style={{
                textAlign: "center",
                color: primaryOne,
                fontFamily: Mulish.SemiBold,
                fontSize: Dimensions.get("window").width * 0.03,
              }}
            >
              {buttons[3].text}
            </Text>
          </ThemedButton>
        )}

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <ThemedText
            style={{
              color: natural20,
              fontSize: 14,
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

export default LoginPageModal;

const styles = StyleSheet.create({
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: secondaryOne,
  },
  middleText: {
    height: "100%",
    color: secondaryOne,
    fontSize: 14,
    fontFamily: Mulish.Medium,
    lineHeight: 14,
  },
  button: {
    width: "100%",
    borderRadius: 12,
  },
});
