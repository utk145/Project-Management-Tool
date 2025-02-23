import { z } from "zod";

// Sign In Card Schema
const signInSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Required: Please enter your email address.")
        .email(),
    password: z
        .string()
        .min(1, "Required: Please enter your password.")
        .max(256),
});

export { signInSchema };
