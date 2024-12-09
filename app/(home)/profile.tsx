import { Dimensions, StyleSheet } from "react-native";
import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { primaryOne, secondaryFour } from "@/constants/colors";
import { Image } from "expo-image";

import { StatusBar } from "expo-status-bar";
import Mulish from "@/constants/font";
import UserMetrics from "@/components/(profile)/user-metrics";
import ProfileLinks from "@/components/(profile)/profile-links";

const imageSize = Dimensions.get("window").height * 0.08;

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <StatusBar translucent />

      <View
        style={{
          borderBottomEndRadius: 20,
          elevation: 5,

          borderBottomStartRadius: 20,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          colors={["white", secondaryFour]}
          style={styles.profile}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: imageSize,
              width: imageSize,

              borderRadius: 12,
              overflow: "hidden",
              borderColor: secondaryFour,
            }}
          >
            <Image
              source={require("@/assets/images/default-profile-photo.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: imageSize,
              justifyContent: "center",
            }}
          >
            <ThemedText
              style={{
                fontSize: 18,
                color: primaryOne,
                letterSpacing: 0.5,

                fontFamily: Mulish.Regular,
                fontWeight: "bold",
              }}
            >
              Jessy Pinkman
            </ThemedText>
            <ThemedText
              style={{
                fontSize: 14,
                color: primaryOne,
                letterSpacing: 0.5,

                fontFamily: Mulish.Regular,
                fontWeight: "bold",
              }}
            >
              jessepinkman@abqmail.com
            </ThemedText>
          </View>
        </LinearGradient>
      </View>
      <ProfileLinks />

      <UserMetrics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profile: {
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
    paddingTop: Constants.statusBarHeight,
    gap: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
