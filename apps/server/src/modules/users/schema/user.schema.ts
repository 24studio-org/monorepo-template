import { pgTable, varchar, text } from 'drizzle-orm/pg-core';
import { baseSchema } from 'src/database/db-utility/base.schema';

export const users = pgTable('users', {
  ...baseSchema,

  email: varchar('email').unique().notNull(),
  password: text('password').notNull(),
});
