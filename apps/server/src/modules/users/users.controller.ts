import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDataTransferObject } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  async create(@Body() data: UserDataTransferObject) {
    return await this.service.store(data);
  }

  @Get()
  async findAll(@Query() query: any) {
    return await this.service.index(query);
  }
}
