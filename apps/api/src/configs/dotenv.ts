import { ZodValidationException } from 'nestjs-zod';
import { envSchema } from '@24studio/types';

export const parseEnv = async () => {
  try {
    envSchema.parse(process.env);
  } catch (err: any) {
    throw new ZodValidationException(err);
  }
};
export default envSchema.parse(process.env);
