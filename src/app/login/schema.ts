import { z } from "zod";

export const schema = z.object({
  email: z.string().trim().min(1, { message: 'User name is invalid.' }),
  password: z.string().trim().min(1, { message: 'Password is required.' }),
});

export const schema2fa = z.object({
  code: z.string().trim().min(1, { message: 'Code is required.' }),
});