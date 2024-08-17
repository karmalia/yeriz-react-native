import { z } from "zod";

// Define the schema
const EmailSchema = z.object({
  email: z.string().email({ message: "E-mail adresi geçersiz!" }),
});

// Export the schema
export { EmailSchema };

// Export the type inferred from the schema
export type TEmailSchema = z.infer<typeof EmailSchema>;
