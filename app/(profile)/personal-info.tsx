import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileButton from "@/components/shared/profile/profile-button";
import { useRouter } from "expo-router";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { natural30, natural40 } from "@/constants/colors";
import Mulish from "@/constants/font";
import Icons from "@/components/shared/icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const dummyUserData = [
  {
    id: 1,
    displayValue: "Ahmet Yılmaz",
    title: "Ad Soyad",
  },
  {
    id: 2,
    displayValue: "AhmetYılmaz@gmail.com",
    title: "E-posta",
  },
  {
    id: 3,
    displayValue: "+90 555 555 55 55",
    title: "Telefon",
  },
];

const PersonalInfo = () => {
  const { push, setParams } = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          gap: 16,
          borderBottomColor: natural40,
          borderBottomWidth: 1,
          paddingBottom: 16,
        }}
      >
        <ThemedText
          style={{
            color: "black",
            fontSize: 16,
            fontFamily: Mulish.SemiBold,
          }}
        >
          Kişisel Bilgiler
        </ThemedText>
        {dummyUserData.map((key, i) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={key.id}
              onPress={() => {
                push("/(profile)/edit-profile");
                setParams({ title: key.title, value: key.displayValue });
              }}
            >
              <ThemedText
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: Mulish.SemiBold,
                }}
              >
                {key.displayValue}
              </ThemedText>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <ThemedText
                  style={{
                    color: natural30,
                    fontSize: 14,
                    fontFamily: Mulish.Regular,
                  }}
                >
                  {key.title}
                </ThemedText>
                <Icons.ChevronRight
                  style={{
                    color: natural30,
                  }}
                  width={14}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.button} key={"key + i"}>
        <ThemedText
          style={{
            color: "#FF5555",
            fontSize: 14,
            fontFamily: Mulish.Black,
          }}
        >
          {"Çıkış Yap"}
        </ThemedText>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    gap: 16,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 8,
    width: Dimensions.get("window").width * 0.8,
  },
});
