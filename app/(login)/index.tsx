import { View, Text, StyleSheet, Keyboard } from "react-native";
import React, { useEffect } from "react";
import { natural30, primaryOne, textColor } from "@/constants/colors";

import LoginLayout from "@/components/(login)/layout";

import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";

import Poppins from "@/constants/font";
import { Link, useNavigation } from "expo-router";
import Icons from "@/components/shared/icons/icons";
import SvgEnhancer from "@/lib/utils/svg-enhancer";
import {
  userLoginSchema,
  TUserLoginSchema,
} from "@/lib/schemas/user-login.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardState } from "react-native-reanimated";
import useKeyboardState from "@/lib/custom-hooks/useKeyboardState";
import useLoginMutation from "@/api/mutations/mock-login";

const LoginPage = () => {
  const navigation = useNavigation();
  const { keyboardState, setKeyboardState } = useKeyboardState();
  const { mutateAsync: login } = useLoginMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = (data: TUserLoginSchema) => {
    console.log(data);
    login(data)
      .then((response) => {
        console.log("cevap: ", response);
      })
      .catch((error) => {
        console.error("client error: ", error.message);
      });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <LoginLayout>
      <View
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <View style={styles.loginForm}>
          <ThemedInput
            leftIcon="UserIcon"
            placeholder="Email adresinizi giriniz"
            label="Email"
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
              pathname: "/forgotPassword",
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
            Şifremi Unuttum
          </Link>
        </View>

        {!keyboardState && (
          <React.Fragment>
            <View style={styles.buttons}>
              <ThemedButton
                size="medium"
                style={{ width: "100%" }}
                variant="secondary"
                onPress={handleSubmit(onSubmit)}
              >
                Giriş Yap
              </ThemedButton>
            </View>

            {/* Horizontal */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                width: "100%",
              }}
            >
              <View
                style={{
                  width: "40%",
                  height: 2,
                  backgroundColor: primaryOne,
                }}
              />
              <Text
                style={{
                  color: primaryOne,
                  fontSize: 16,
                  fontFamily: Poppins.Regular,
                  marginHorizontal: 10,
                }}
              >
                veya
              </Text>
              <View
                style={{
                  width: "40%",
                  height: 2,
                  backgroundColor: primaryOne,
                }}
              />
            </View>
            {/* Login Options */}
            <SvgEnhancer aspectRatio={3}>
              {
                // @ts-ignore
                ({ width, height }) => (
                  <Icons.GoogleEnglishSignIn width={width} height={height} />
                )
              }
            </SvgEnhancer>
            <SvgEnhancer aspectRatio={3}>
              {
                // @ts-ignore
                ({ width, height }) => (
                  <Icons.GoogleEnglishSignIn width={width} height={height} />
                )
              }
            </SvgEnhancer>
          </React.Fragment>
        )}
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    width: "100%",
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

export default LoginPage;
