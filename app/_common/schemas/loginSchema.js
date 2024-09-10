import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .nonempty("Password is required"),
  rememberMe: z.boolean().optional(),
});

export default loginSchema;
