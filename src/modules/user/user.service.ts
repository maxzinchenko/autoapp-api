import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { WhereOptions } from 'sequelize';

import { User } from './user.entity';
import { UserDTO } from './dto/users.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {
    this.userRepository = userRepository;
  }

  async findOneById(id: string): Promise<User> {
    const instance = await this.userRepository.findOne<User>({ where: { id } });
    if (!instance) {
      throw new NotFoundException('User not found');
    }

    return instance;
  }

  async findOneByPhone(phone: string): Promise<User> {
    const instance = await this.userRepository.findOne<User>({ where: { phone } });
    if (!instance) {
      throw new NotFoundException('User not found');
    }

    return instance;
  }

  async findOne(where: WhereOptions<User>): Promise<User> {
    const instance = await this.userRepository.findOne({ where });
    if (!instance) {
      throw new NotFoundException('User not found');
    }

    return instance;
  }

  async findAll(where?: WhereOptions<User>): Promise<User[]> {
    const instances = await this.userRepository.findAll(where ? { where } : {});

    return instances;
  }

  async create(data: UserDTO): Promise<User> {
    try {
      const instance = await this.userRepository.create<User>(data);

      return instance;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: string, data: UserDTO): Promise<User> {
    const instance = await this.userRepository.update<User>(data, { where: { id } });

    return instance[1][0];
  }

  async destroy(id: string): Promise<{ id: string }> {
    await this.userRepository.destroy({ where: { id } });

    return { id };
  }
}
