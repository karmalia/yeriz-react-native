// components/PasswordChecklist.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "@/components/shared/themed-text/themed-text";
import {
  natural10,
  natural20,
  natural30,
  primaryOne,
} from "@/constants/colors";
import useKeyboardStore from "@/stores/keyboardStore";

const PasswordChecklist = ({ password, errors }) => {
  const { isCovered } = useKeyboardStore();

  console.log("Errors", errors);
  const validations = [
    { label: "En az 8 karakter", isValid: password.length >= 8 },
    { label: "En az bir büyük harf", isValid: /[A-Z]/.test(password) },
    { label: "En az bir küçük harf", isValid: /[a-z]/.test(password) },
    { label: "En az bir rakam", isValid: /\d/.test(password) },
  ];

  return (
    <View
      style={{
        marginVertical: isCovered.on ? 4 : 10,
      }}
    >
      {validations?.map((validation, index) => (
        <View key={index + "val"} style={styles.checkItem}>
          <View
            style={{
              backgroundColor: validation.isValid ? primaryOne : natural30,
              borderRadius: 50,
              padding: 5,
              marginRight: 8,
              marginBottom: 2,
            }}
          />
          <ThemedText style={styles.checkText}>{validation.label}</ThemedText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    color: natural20,
    fontSize: 12,
  },
});

export default PasswordChecklist;
