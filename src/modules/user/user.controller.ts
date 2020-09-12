import { Controller, Body, Param, Get, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserDTO } from './dto/users.dto';
import { User } from './user.entity';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiBody({ type: [UserDTO], required: false })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get specific user' })
  @ApiBody({ type: UserDTO, required: false })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({ type: UserDTO })
  async create(@Body() data: UserDTO): Promise<User> {
    return await this.userService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: UserDTO })
  async update(@Param('id') id: string, @Body() data: UserDTO): Promise<User> {
    return await this.userService.update(id, data);
  }
}
