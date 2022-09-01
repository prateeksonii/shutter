import { z } from "zod";

export const contactEmailFormValidator = z.object({
  email: z.string().email(),
});

export type ContactEmailFormValues = z.infer<typeof contactEmailFormValidator>;
