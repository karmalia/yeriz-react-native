import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../shared/themed-text/themed-text";
import { natural10, natural20 } from "@/constants/colors";
import Icons from "../shared/icons/icons";
import Mulish from "@/constants/font";

type Props = {};

const UserMetrics = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 20,
        }}
      >
        <View style={styles.box}>
          <Icons.TurkishLira
            width={50}
            height={50}
            style={{
              color: natural20,
            }}
          />
          <View>
            <ThemedText
              style={{
                fontSize: 16,
                color: natural20,
              }}
            >
              Tasaruf Miktarı
            </ThemedText>

            <ThemedText
              style={{
                fontSize: 16,
                color: natural10,
                fontFamily: Mulish.Black,
              }}
            >
              0.00 ₺
            </ThemedText>
          </View>
        </View>
        <View style={styles.box}>
          <Icons.Co2 width={50} height={50} style={{ color: natural20 }} />
          <View style={{}}>
            <ThemedText
              style={{
                fontSize: 16,
                color: natural20,
                textAlign: "center",
              }}
            >
              Engellenen CO2
            </ThemedText>

            <ThemedText
              style={{
                fontSize: 16,
                color: natural10,
                fontFamily: Mulish.Black,
              }}
            >
              0 kg
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserMetrics;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: "white",
    zIndex: -1,
    paddingVertical: 20,
  },
  box: {
    elevation: 3,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
});
