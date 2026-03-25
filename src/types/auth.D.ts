import z from 'zod';
import authValidation from '../validations/auth.validation';

type SignUpParams = z.infer<typeof authValidation.signUp>;

export type { SignUpParams };
