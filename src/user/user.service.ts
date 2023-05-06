import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {

    }

    async save(userDto: UserDto): Promise<UserDto> {
        const saveUser = await this.userRepository.save(userDto);
        return plainToInstance(UserDto, saveUser, {
            excludeExtraneousValues: true
        });
    }

    async update(id: string, userDto: UserDto): Promise<UserDto> {
        const updateUser = await this.userRepository.update(id, userDto);
        return plainToInstance(UserDto, updateUser, {
            excludeExtraneousValues: true
        })
    }

    async findOne(id: string): Promise<UserDto> {
        const getUser = await this.userRepository.findOne({
            where: {
                id: id as any
            }
        })
        return plainToInstance(UserDto, getUser, {
            excludeExtraneousValues: true
        })
    }

    async deleteById(id: string): Promise<{ result: string }> {
        const deleteResult = await this.userRepository.delete(id)
        return { result: 'success' }
    }
}