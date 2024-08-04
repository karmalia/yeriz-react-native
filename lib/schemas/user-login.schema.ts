import { z } from "zod";

// Define the schema
const userLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Lütfen geçerli bir email adresi giriniz!" }),
  password: z.string().min(1, { message: "Lütfen şifrenizi giriniz!" }),
});

// Export the schema
export { userLoginSchema };

// Export the type inferred from the schema
export type TUserLoginSchema = z.infer<typeof userLoginSchema>;
