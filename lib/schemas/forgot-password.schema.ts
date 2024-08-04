import { z } from "zod";

// Define the schema
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "E-mail adresi geçersiz!" }),
});

// Export the schema
export { forgotPasswordSchema };

// Export the type inferred from the schema
export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
