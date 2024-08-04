import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  TForgotPasswordSchema,
} from "@/lib/schemas/forgot-password.schema";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { View } from "react-native";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import LoginLayout from "@/components/(login)/layout";

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  console.log("Formstate", watch());

  const onSubmit = (data: TForgotPasswordSchema) => {
    console.log(data);
  };

  return (
    <LoginLayout>
      <View
        style={{
          marginTop: 20,
          width: "80%",
        }}
      >
        <ThemedInput
          leftIcon="EmailIcon"
          placeholder="Email adresinizi giriniz"
          control={control}
          name="email"
          hasError={errors.email?.message}
        />
        <ThemedButton
          style={{
            marginTop: 20,
          }}
          size="medium"
          variant="secondary"
          outline
          onPress={handleSubmit(onSubmit)}
        >
          Şifremi Sıfırla
        </ThemedButton>
      </View>
    </LoginLayout>
  );
};

export default ForgotPasswordPage;
