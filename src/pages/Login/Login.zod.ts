import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.coerce.string().min(1),
  password: z.coerce.string().min(1),
});

export type TLoginForm = z.infer<typeof LoginSchema>;
