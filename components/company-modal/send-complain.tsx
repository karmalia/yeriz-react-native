import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import { natural10, primaryOne } from "@/constants/colors";
import Mulish from "@/constants/font";
import ThemedCheckbox from "../shared/themed-checkbox/themed-checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ThemedButton from "../shared/themed-button/themed-button";
type Props = {};

const SendComplain = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <ThemedText
          style={{ fontSize: 16, color: natural10, fontFamily: Mulish.Medium }}
        >
          Şikayet Gönder
        </ThemedText>
        <View
          style={{
            gap: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <BouncyCheckbox
              fillColor={primaryOne}
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: primaryOne, borderRadius: 5 }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 5,
              }}
              width={25}
              onPress={(isChecked: boolean) => {}}
            />
            <ThemedText
              style={{
                fontFamily: Mulish.Regular,
                color: natural10,
                fontSize: 16,
              }}
            >
              {"null"}
            </ThemedText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <BouncyCheckbox
              fillColor={primaryOne}
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: primaryOne, borderRadius: 5 }}
              innerIconStyle={{
                borderWidth: 2,
                borderRadius: 5,
              }}
              width={25}
              onPress={(isChecked: boolean) => {}}
            />
            <ThemedText
              style={{
                fontFamily: Mulish.Regular,
                color: natural10,
                fontSize: 16,
              }}
            >
              {"null"}
            </ThemedText>
          </View>
        </View>
      </View>

      <ThemedButton
        variant="primary"
        size="medium"
        onPress={() => {}}
        style={{
          marginTop: 20,
        }}
      >
        <ThemedText
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontFamily: Mulish.Bold,
          }}
        >
          GÖNDER
        </ThemedText>
      </ThemedButton>
    </View>
  );
};

export default SendComplain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
