// components/PasswordChecklist.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordChecklist = ({ password }) => {
  const validations = [
    { label: "En az 8 karakter", isValid: password.length >= 8 },
    { label: "En az bir büyük harf", isValid: /[A-Z]/.test(password) },
    { label: "En az bir küçük harf", isValid: /[a-z]/.test(password) },
    { label: "En az bir rakam", isValid: /\d/.test(password) },
    { label: "En az bir özel karakter", isValid: /[@$!%*?&]/.test(password) },
  ];

  return (
    <View style={styles.container}>
      {validations?.map((validation, index) => (
        <View key={index} style={styles.checkItem}>
          <Ionicons
            name={validation.isValid ? "checkmark-circle" : "close-circle"}
            size={20}
            color={validation.isValid ? "green" : "red"}
          />
          <Text style={styles.checkText}>{validation.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
});

export default PasswordChecklist;
