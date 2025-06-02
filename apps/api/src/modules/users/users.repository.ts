import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../database/schema';
import { eq } from 'drizzle-orm';
import { UserDataTransferObject } from './dto/user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_CONNECTION } from 'src/database/database.connection';
import { users } from './schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DRIZZLE_CONNECTION)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async findByEmail(email: string) {
    return await this.db.query.users.findFirst({
      where: eq(users.email, email),
    });
  }

  async store(input: UserDataTransferObject) {
    const [user] = await this.db
      .insert(users)
      .values({
        ...input,
        email: input.email || 'email@email.com',
        password: '',
      })
      .returning();
    return user;
  }
}
