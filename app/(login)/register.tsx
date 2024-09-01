import { View } from "react-native";
import React from "react";
import LoginLayout from "@/components/(login)/layout";
import ThemedInput from "@/components/shared/themed-input/themed-input";
import ThemedButton from "@/components/shared/themed-button/themed-button";
import { useRouter } from "expo-router";
import { EmailSchema, TEmailSchema } from "@/lib/schemas/email.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { natural30 } from "@/constants/colors";
import ThemedText from "@/components/shared/themed-text/themed-text";
import useRegisterStore from "@/stores/registerStore";
import useKeyboardStore from "@/stores/keyboardStore";
// import useAuthStore from "@/stores/registerStore";

const RegisterPage = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TEmailSchema>({
    resolver: zodResolver(EmailSchema),
  });
  const { isCovered } = useKeyboardStore();
  const { setEmail } = useRegisterStore();

  const onSubmit = (data: TEmailSchema) => {
    setEmail(data.email);
    router.navigate("/(login)/enter-code");
    router.setParams({ email: data.email, from: "register" });
  };

  return (
    <LoginLayout>
      <View
        style={{
          display: "flex",
          gap: 12,
          marginTop: isCovered.on ? 40 : 0,
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
          onSubmitEditing={handleSubmit(onSubmit)}
          style={{}}
        />

        <ThemedButton
          variant="secondary"
          size="small"
          style={{
            marginTop: 20,
            fontWeight: "900",
          }}
          disabled={!!errors.email}
          onPress={handleSubmit(onSubmit)}
        >
          <ThemedText>İlerle</ThemedText>
        </ThemedButton>
      </View>
    </LoginLayout>
  );
};

export default RegisterPage;
