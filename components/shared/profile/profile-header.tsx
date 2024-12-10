import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from "@/components/shared/icons/icons";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Mulish from "@/constants/font";
import { useRouter } from "expo-router";

type ProfileHeaderProps = {
  title: string;
};

const ProfileHeader = ({ title }: ProfileHeaderProps) => {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingTop: Constants.statusBarHeight,
        height: 90,
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ marginLeft: 10 }}
      >
        <Icons.ChevronLeft style={{ color: "black" }} width={16} />
      </TouchableOpacity>
      <ThemedText
        style={{
          fontSize: 18,
          color: "black",
          fontFamily: Mulish.Black,
          letterSpacing: 1,
          flex: 1,
          textAlign: "center",
          paddingRight: 20,
        }}
      >
        {title}
      </ThemedText>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
