import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import LoginLayout from "@/components/(login)/layout";
import { useLocalSearchParams, useRouter } from "expo-router";
import { natural20, natural30, natural40 } from "@/constants/colors";
import Poppins from "@/constants/font";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { KeyboardEvents } from "react-native-keyboard-controller";
import useCheckIfElementCoveredByKeyboard from "@/lib/utils/useCheckIfElementCoveredByKeyboard";

const EnterCodePage = () => {
  const [code, setCode] = React.useState("");
  const inputRef = React.useRef(null);
  const { navigate } = useRouter();
  const localParams = useLocalSearchParams();
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const buttonRef = React.useRef(null);
  const touchOn = useCheckIfElementCoveredByKeyboard(keyboardHeight, buttonRef);

  React.useEffect(() => {
    const show = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.height);
    });

    const close = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      setKeyboardHeight(0);
    });

    return () => {
      show.remove();
      close.remove();
    };
  }, []);

  const focusHiddenInput = () => {
    if (inputRef.current) {
      console.log("Focushed");
      //@ts-ignore
      inputRef.current.focus();
    }
  };

  const handleRouteChange = () => {
    if (localParams) {
      if (localParams.from === "forgot-password") {
        // Eğer kişi şifremi unuttum sayfasından geldiyse
      }

      if (localParams.from === "register") {
        // Eğer kişi kayıt sayfasından geldiyse
        navigate("/(login)/create-password");
      }
    }
  };

  return (
    <LoginLayout>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: touchOn ? 4 : 14,
        }}
      >
        <Text
          style={{
            color: natural30,
            fontSize: touchOn ? 10 : 14,
            fontFamily: Poppins.Regular,
            textAlign: "center",
          }}
        >
          Lütfen mail adresinize gönderdiğimiz 6 haneli doğrulama kodunu
          giriniz.
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: touchOn ? "row" : "column",
            justifyContent: "center",
            width: "100%",
            gap: 5,
          }}
        >
          <ThemedText
            style={{
              color: natural20,
              fontSize: touchOn ? 10 : 14,
              fontFamily: Poppins.SemiBold,
              textAlign: "center",

              lineHeight: 18,
            }}
          >
            Kalan Süre
          </ThemedText>
          <ThemedText
            style={{
              color: natural20,
              fontSize: touchOn ? 10 : 14,
              fontFamily: Poppins.SemiBold,
              textAlign: "center",

              lineHeight: 18,
            }}
          >
            180 sn
          </ThemedText>
        </View>
      </View>

      <TextInput
        ref={inputRef}
        maxLength={6}
        placeholder="Kodunuzu giriniz"
        style={{
          height: 50,
          opacity: 0,
          position: "absolute",
          zIndex: -1,
          top: -100,
          left: -100,
        }}
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        autoCorrect={false} // Disable auto-correction
        autoCapitalize="none"
        spellCheck={false}
        onSubmitEditing={handleRouteChange}
      />
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          paddingBottom: touchOn ? 6 : 14,
          justifyContent: "space-around",
        }}
      >
        {Array.from({ length: 6 })
          .fill(0)
          .map((_, index) => {
            return (
              <TextInput
                autoCorrect={false} // Disable auto-correction
                autoCapitalize="none"
                spellCheck={false}
                keyboardType="number-pad"
                key={index + "code"}
                onFocus={focusHiddenInput}
                style={[
                  styles.input,
                  {
                    height: touchOn ? 32 : 42,
                    width: touchOn ? 32 : 42,
                  },
                ]}
                value={code[index]}
                onPress={focusHiddenInput}
              />
            );
          })}
      </View>
      <ThemedButton
        variant="secondary"
        size={touchOn ? "small" : "medium"}
        onPress={handleRouteChange}
        ref={buttonRef}
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
    textAlign: "center",
    backgroundColor: "white",

    borderColor: natural40,
    fontSize: 20,
    color: natural20,
  },
});

export default EnterCodePage;
