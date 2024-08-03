import { View, Text } from "react-native";
import React, { useEffect } from "react";
import LoginLayout from "@/components/(login)/layout";
import LoginInput from "@/components/(login)/LoginInput";
import ThemedRadio from "@/components/shared/themed-radio/themed-radio";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useLocalSearchParams, useNavigation } from "expo-router";

type RegisterProps = {};

const Register = (props: RegisterProps) => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Kayıt Ol",
    });
  }, [navigation]);

  const [tab, setTab] = React.useState(0);
  const [userForm, setUserForm] = React.useState({
    name: "",
    surname: "",
    mail: "",
    password: "",
    passwordConfirm: "",
    biziNeredenDuydunuz: "",
  });

  const RegisterInputs = {
    0: [
      {
        label: "Ad",
        placeholder: "Adınızı giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, name: text });
        },
      },
      {
        label: "Soyad",
        placeholder: "Soyadınızı giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, surname: text });
        },
      },
      {
        label: "Bizi nereden duydunuz?",
        placeholder: "Bizi nereden duydunuz?",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, biziNeredenDuydunuz: text });
        },
      },
    ],
    1: [
      {
        label: "Ad",
        placeholder: "Adınızı giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, name: text });
        },
      },
      {
        label: "Soyad",
        placeholder: "Soyadınızı giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, surname: text });
        },
      },
      {
        label: "Bizi nereden duydunuz?",
        placeholder: "Bizi nereden duydunuz?",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, biziNeredenDuydunuz: text });
        },
      },
    ],
    2: [
      {
        label: "Mail",
        placeholder: "Mail adresinizi giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, mail: text });
        },
      },
      {
        label: "Şifre",
        placeholder: "Şifrenizi giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, password: text });
        },
      },
      {
        label: "Şifre Tekrar",
        placeholder: "Şifrenizi tekrar giriniz",
        value: "",
        onchange: (text: string) => {
          setUserForm({ ...userForm, passwordConfirm: text });
        },
      },
    ],
  };

  return (
    <LoginLayout>
      <View
        style={{
          width: "80%",
          rowGap: 14,
          marginTop: 40,
        }}
      >
        {RegisterInputs[tab].map((input, index) => (
          <ThemedInput
            key={index}
            label={input.placeholder}
            placeholder={input.placeholder}
          />
        ))}
        <View style={styles.buttons}>
          {tab === 0 && (
            <React.Fragment>
              <ThemedButton
                size="medium"
                variant="secondary"
                style={{ width: 150 }}
                onPress={() => setTab(1)}
              >
                KAYIT OL
              </ThemedButton>
            </React.Fragment>
          )}
          {tab === 1 && (
            <ThemedButton
              size="medium"
              variant="secondary"
              style={{ width: 150 }}
              onPress={() => setTab(1)}
            >
              İleri
            </ThemedButton>
          )}
          {tab === 2 && (
            <React.Fragment>
              <ThemedButton
                size="medium"
                outline
                variant="secondary"
                style={{ width: 150 }}
                onPress={() => setTab(0)}
              >
                Geri
              </ThemedButton>
              <ThemedButton
                size="medium"
                variant="secondary"
                style={{ width: 150 }}
                onPress={() => console.log("")}
              >
                Kayıt Ol
              </ThemedButton>
            </React.Fragment>
          )}
        </View>
      </View>
    </LoginLayout>
  );
};

const styles = {
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 20,
  },
};

export default Register;
