import { KeyboardAvoidingView, View } from "react-native";
import React from "react";
import LoginLayout from "@/components/(login)/layout";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useNavigation, useRouter } from "expo-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { natural30 } from "@/constants/colors";
import ThemedText from "@/components/shared/themed-text/themed-text";
import useAuthStore from "@/stores/registerStore";
import {
  ConfirmPasswordSchema,
  TConfirmPasswordSchema,
} from "@/lib/schemas/register.schemas/confirm-password.schema";
import PasswordChecklist from "@/components/(login)/password-checklist/password-checklist";

const CreatePasswordPage = () => {
  const { navigate } = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TConfirmPasswordSchema>({
    resolver: zodResolver(ConfirmPasswordSchema),
  });

  const { setPassword } = useAuthStore();

  const onSubmit = (data: TConfirmPasswordSchema) => {
    setPassword(data.password);

    // Will send the data to the server
    // Mail addres will receive a six digit code

    navigate("/(home)/");
  };

  return (
    <LoginLayout>
      <View
        style={{
          display: "flex",
          gap: 4,
        }}
      >
        <KeyboardAvoidingView>
          <ThemedInput
            leftIcon="LockIcon"
            rightIcon="EyeOffIcon"
            label="Şifre"
            control={control}
            name="password"
            hasError={errors.password?.message}
            placeholder="Şifrenizi giriniz"
            placeholderTextColor={natural30}
          />

          <PasswordChecklist password={watch("password") || ""} />

          <ThemedInput
            leftIcon="LockIcon"
            label="Şifre Tekrar"
            rightIcon="EyeOffIcon"
            control={control}
            name="confirmPassword"
            hasError={errors.confirmPassword?.message}
            placeholder="Şifrenizi tekrar giriniz"
            placeholderTextColor={natural30}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
          <ThemedButton
            variant="secondary"
            size="small"
            style={{
              marginTop: 20,
              fontWeight: "900",
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <ThemedText>Kayıt Ol</ThemedText>
          </ThemedButton>
        </KeyboardAvoidingView>
      </View>
    </LoginLayout>
  );
};

export default CreatePasswordPage;
