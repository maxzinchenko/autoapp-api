import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';

import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDTO } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiBody({ type: [UserDTO], required: false })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiBody({ type: UserDTO, required: false })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOneById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiBody({ type: UserDTO })
  async create(@Body() data: UserDTO): Promise<User> {
    return await this.userService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiBody({ type: UserDTO })
  async update(@Param('id') id: string, @Body() data: UserDTO): Promise<User> {
    return await this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Destroy a user' })
  @ApiBody({ type: UserDTO, required: false })
  async destroy(@Param('id') id: string): Promise<{ id: string }> {
    return await this.userService.destroy(id);
  }
}
