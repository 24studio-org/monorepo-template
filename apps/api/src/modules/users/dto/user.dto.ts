import { createZodDto } from 'nestjs-zod';
import { userSchema } from '@24studio/schema';

export class UserDataTransferObject extends createZodDto(userSchema) {}
