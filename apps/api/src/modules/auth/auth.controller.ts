import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDataTransferObject } from '../users/dto/user.dto';
import { UseZodGuard } from 'nestjs-zod';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseZodGuard('body', UserDataTransferObject)
  async login(@Body() body: UserDataTransferObject, @Res() res: Response) {
    const user = await this.authService.login(body);
    // set token to the cookie
    res.cookie('token', `token_email:${user.email}`, {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    return res.status(HttpStatus.OK).json({ message: 'Login successuflly' });
  }
}
