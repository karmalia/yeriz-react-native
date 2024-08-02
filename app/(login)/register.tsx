import { View, Text } from "react-native";
import React from "react";
import LoginLayout from "@/components/(login)/layout";
import LoginInput from "@/components/(login)/LoginInput";
import ThemedRadio from "@/components/shared/themed-radio/themed-radio";
import ThemedInput from "@/components/shared/themed-input/themed-input";

type RegisterProps = {};

const Register = (props: RegisterProps) => {
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
      {RegisterInputs[tab].map((input, index) => (
        <ThemedInput
          key={index}
          label={input.placeholder}
          placeholder={input.placeholder}
        />
      ))}
    </LoginLayout>
  );
};

export default Register;
