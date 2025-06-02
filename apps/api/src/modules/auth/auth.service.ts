import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDataTransferObject } from "../users/dto/user.dto";
import { UserRepository } from "../users/users.repository";
import { comparePassword } from "src/libs/utils";

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(data: UserDataTransferObject) {
    // check if user exist of not
    const user = await this.userRepository.findByEmail(data.email);
    if (!user)
      throw new HttpException(
        "No User found with that email!",
        HttpStatus.NOT_FOUND,
      );

    // check is password is match
    const compare = await comparePassword(user.password, data.password);
    if (!compare)
      throw new HttpException("Incrorrect password", HttpStatus.UNAUTHORIZED);

    return user;
  }
}
