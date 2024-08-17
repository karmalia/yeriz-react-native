import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import LoginLayout from "@/components/(login)/layout";
import { useRouter } from "expo-router";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import { natural10, natural20, natural30, natural40 } from "@/constants/colors";
import Poppins from "@/constants/font";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";

const EnterCodePage = () => {
  const [code, setCode] = React.useState("");
  const inputRef = React.useRef(null);
  const router = useRouter();

  const focusHiddenInput = () => {
    if (inputRef.current) {
      //@ts-ignore
      inputRef.current.focus();
    }
  };

  return (
    <LoginLayout>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 24,
        }}
      >
        <Text
          style={{
            color: natural30,
            fontSize: 14,
            fontFamily: Poppins.Regular,
            textAlign: "center",
          }}
        >
          Lütfen mail adresinize gönderdiğimiz 6 haneli doğrulama kodunu
          giriniz.
        </Text>
        <Text
          style={{
            color: natural20,
            fontSize: 16,
            fontFamily: Poppins.SemiBold,
            textAlign: "center",
          }}
        >
          Kalan Süre
        </Text>
        <Text
          style={{
            color: natural20,
            fontSize: 16,
            fontFamily: Poppins.SemiBold,
            textAlign: "center",
          }}
        >
          180 sn
        </Text>
      </View>

      <TextInput
        ref={inputRef}
        maxLength={6}
        placeholder="Kodunuzu giriniz"
        style={{ display: "none" }}
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <TextInput
              keyboardType="number-pad"
              key={index}
              onFocus={focusHiddenInput}
              style={styles.input}
              value={code[index]}
            />
          );
        })}
      </View>
      <ThemedButton
        variant="secondary"
        size="medium"
        onPress={() => router.navigate("/(home)")}
        style={{ marginTop: 20 }}
      >
        <ThemedText
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "500",
          }}
        >
          Doğrula
        </ThemedText>
      </ThemedButton>
    </LoginLayout>
  );
};

export const styles = StyleSheet.create({
  input: {
    height: 42,
    width: 42,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: natural40,
    fontSize: 20,
  },
});

export default EnterCodePage;
