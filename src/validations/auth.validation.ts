import z from 'zod';

const signUp = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
  age: z.number().min(16).optional(),
});

const signIn = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
});

const authValidation = {
  signUp,
  signIn,
};

export default authValidation;
