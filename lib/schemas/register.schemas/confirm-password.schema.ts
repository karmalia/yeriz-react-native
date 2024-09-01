import { z } from "zod";

const ConfirmPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Şifre en az 8 karakter olmalıdır." })
      .regex(/[A-Z]/, { message: "Şifre en az bir büyük harf içermelidir." })
      .regex(/[a-z]/, { message: "Şifre en az bir küçük harf içermelidir." })
      .regex(/\d/, { message: "Şifre en az bir rakam içermelidir." }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler uyuşmuyor.",
    path: ["confirmPassword"],
  });

export { ConfirmPasswordSchema };

export type TConfirmPasswordSchema = z.infer<typeof ConfirmPasswordSchema>;
