import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserDataTransferObject } from './dto/user.dto';
import { hashPassword } from 'src/libs/utils';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async index(query: any) {
    //
    return 'hello';
  }
  async store(data: UserDataTransferObject) {
    // create a new user
    const isUser = await this.repository.findByEmail(data.email);
    if (isUser)
      throw new HttpException(
        'The request user already exist',
        HttpStatus.BAD_REQUEST,
      );
    return await this.repository.store({
      ...data,
      password: await hashPassword(data.password),
    });
  }
}
