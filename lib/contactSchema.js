import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Please enter a valid email address"),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[0-9+\s()-]+$/.test(val),
      "Please enter a valid phone number"
    ),

  message: z.string().min(10, "Message must be at least 10 characters"),
});
