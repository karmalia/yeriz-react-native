import React from "react";

import { StyleSheet, Text, View } from "react-native";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import { Link, useRouter } from "expo-router";
import { natural20, natural30, textColor } from "@/constants/colors";
import Poppins from "@/constants/font";
import { useForm } from "react-hook-form";
import {
  TUserLoginSchema,
  userLoginSchema,
} from "@/lib/schemas/user-login.schema";
import LoginLayout from "@/components/(login)/layout";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
import useLoginMutation from "@/api/mutations/mock-login";
import { zodResolver } from "@hookform/resolvers/zod";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import ThemedText from "@/components/shared/themed-text/themed-text";
type Props = {};

function EmailLoginPage({}: Props) {
  const { navigate } = useRouter();
  const { hideKeyboard, keyboardState, setKeyboardState } = useKeyboardState();
  const { mutateAsync: login, isPending } = useLoginMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = async (data: TUserLoginSchema) => {
    console.log(data);
    hideKeyboard();
    // login(data)
    //   .then((response) => {
    //     // navigation.navigate("(home)");
    //     setKeyboardState(false);
    //   })
    //   .catch((error) => {
    //     return error;
    //   });
    navigate("/(home)");
  };

  return (
    <LoginLayout>
      <View style={styles.loginForm}>
        <ThemedInput
          leftIcon="UserIcon"
          placeholder="Email adresinizi giriniz"
          label="E-Posta"
          name="email"
          control={control}
          hasError={errors.email?.message}
        />
        <ThemedInput
          leftIcon="LockIcon"
          rightIcon="EyeOffIcon"
          placeholder="Şifrenizi giriniz"
          label="Şifre"
          name="password"
          control={control}
          hasError={errors.password?.message}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Link
          href={{
            pathname: "/(login)/forgot-password",
            params: { from: "(login)" },
          }}
          style={{
            color: natural30,
            paddingTop: 4,
            alignSelf: "flex-end",
            width: "100%",
            textDecorationLine: "underline",
            fontSize: 12,
            fontFamily: Poppins.Regular,
            textAlign: "right",
            paddingRight: 8,
          }}
        >
          {!keyboardState && (
            <ThemedText variant="primary">Şifremi Unuttum</ThemedText>
          )}
        </Link>
      </View>
      <View style={styles.buttons}>
        <ThemedButton
          size="medium"
          style={{ width: "100%" }}
          variant="secondary"
          isLoading={isPending}
          onPress={handleSubmit(onSubmit)}
        >
          <ThemedText
            style={{
              color: "white",
              fontWeight: "600",
            }}
          >
            Giriş Yap
          </ThemedText>
        </ThemedButton>
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    width: "100%",
    display: "flex",
    gap: 4,
  },

  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  text: {
    color: textColor,
    fontSize: 12,
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    height: 52,
    backgroundColor: "white",
    paddingLeft: 34,
    fontSize: 16,
  },
});

export default EmailLoginPage;
