import { z } from "zod";

const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(4, { message: "First name must be at least 4 characters" })
      .max(20, { message: "First name cannot be more than 20 characters" })
      .nonempty("First name is required"),
    lastName: z
      .string()
      .min(4, { message: "Last name must be at least 4 characters" })
      .max(20, { message: "Last name cannot be more than 20 characters" })
      .nonempty("Last name is required"),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty("Email is required"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character",
      })
      .nonempty("Password is required"),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Confirm password must contain at least one special character",
      })
      .nonempty("Confirm password is required"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default signupSchema;
