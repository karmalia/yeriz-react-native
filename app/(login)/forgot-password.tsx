import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailSchema, TEmailSchema } from "@/lib/schemas/email.schema";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { View } from "react-native";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import LoginLayout from "@/components/(login)/layout";
import { Text } from "react-native-svg";
import ThemedText from "@/components/shared/themed-text/themed-text";
import { natural30, primaryOne } from "@/constants/colors";
import { useRouter } from "expo-router";

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const { navigate, setParams } = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TEmailSchema>({
    resolver: zodResolver(EmailSchema),
  });

  const onSubmit = (data: TEmailSchema) => {
    // Will send the data to the server
    // Mail addres will receive a six digit code

    navigate("/(login)/enter-code");
    setParams({ email: data.email, from: "forgot-password" });
  };

  return (
    <LoginLayout>
      <View
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <ThemedInput
          leftIcon="EmailIcon"
          label="E-Posta"
          name="email"
          control={control}
          hasError={errors.email?.message}
          placeholder="Mail adresinizi giriniz"
          placeholderTextColor={natural30}
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
          <ThemedText>Gönder</ThemedText>
        </ThemedButton>
      </View>
    </LoginLayout>
  );
};

export default ForgotPasswordPage;
