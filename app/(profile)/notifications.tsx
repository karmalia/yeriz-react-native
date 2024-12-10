import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedRadio from "@/components/shared/themed-radio/themed-radio";
import ThemedSwitch from "@/components/shared/themed-switch/themed-switch";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Mulish from "@/constants/font";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.section}>
          <ThemedText style={styles.sectionText}>Bildirimler</ThemedText>
          <ThemedSwitch
            isEnabled={false}
            onSwitch={() => console.log("Bildirimler Switch")}
          />
        </View>
        <View style={styles.section}>
          <ThemedText style={styles.sectionText}>Email Aboneliği</ThemedText>
          <ThemedSwitch
            isEnabled={true}
            onSwitch={() => console.log("Email Switch")}
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  box: {
    borderTopColor: "#f0f0f0",
    borderTopWidth: 1,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  section: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 16,
    flex: 1,
    color: "black",
    fontFamily: Mulish.Black,
  },
});
