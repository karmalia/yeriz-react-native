import { Dimensions, StyleSheet, Text } from "react-native";
import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  natural20,
  natural30,
  primaryOne,
  secondaryFour,
  secondaryOne,
  secondaryThree,
  secondaryTwo,
} from "@/constants/colors";
import { Image } from "expo-image";
import Icons from "@/components/shared/icons/icons";
import {
  GestureHandlerRootView,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["white", secondaryThree]}
          style={styles.profile}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: Dimensions.get("window").height * 0.08,
                width: Dimensions.get("window").height * 0.08,

                borderRadius: 50,
                overflow: "hidden",
                borderColor: secondaryFour,
              }}
            >
              <Image
                source={require("@/assets/images/default-profile-photo.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View>
              <ThemedText
                style={{
                  fontSize: 14,
                  color: natural30,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Ad Soyad
              </ThemedText>
              <ThemedText
                style={{
                  fontSize: 14,
                  color: natural30,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                email@mail.com
              </ThemedText>
            </View>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 2,
            }}
            onPress={() => router.navigate("/modals/login-modal")}
          >
            <Icons.ExitIcon />
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView
          style={{
            paddingVertical: 20,
          }}
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: primaryOne,
              width: Dimensions.get("window").width * 0.8,
              height: 52,
            }}
          >
            <Text
              style={{
                color: natural20,
                fontSize: 14,
              }}
            >
              Kişisel Bilgilerim
            </Text>
            <Icons.ChevronRight
              style={{
                color: primaryOne,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: primaryOne,
              width: Dimensions.get("window").width * 0.8,
              height: 52,
            }}
          >
            <ThemedText
              style={{
                color: natural20,
                fontSize: 14,
              }}
            >
              Kişisel Bilgilerim
            </ThemedText>
            <Icons.ChevronRight
              style={{
                color: primaryOne,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: primaryOne,
              width: Dimensions.get("window").width * 0.8,
              height: 52,
            }}
          >
            <Text
              style={{
                color: natural20,
                fontSize: 14,
              }}
            >
              Kişisel Bilgilerim
            </Text>
            <Icons.ChevronRight
              style={{
                color: primaryOne,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              borderColor: primaryOne,
              width: Dimensions.get("window").width * 0.8,
              height: 52,
            }}
          >
            <Text
              style={{
                color: natural20,
                fontSize: 14,
              }}
            >
              Kişisel Bilgilerim
            </Text>
            <Icons.ChevronRight
              style={{
                color: primaryOne,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  profile: {
    height: Dimensions.get("window").height * 0.15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: Dimensions.get("window").width * 0.8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
});
