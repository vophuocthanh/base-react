import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().min(2, {
    message: 'Email is valid.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().min(2, {
    message: 'Email is valid.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});
