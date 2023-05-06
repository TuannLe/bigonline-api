import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto'

@Controller("/user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/create-user")
    createUser(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.save(user);
    }

    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() user: UserDto): Promise<UserDto> {
        return this.userService.update(id, user)
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.userService.deleteById(id)
    }
}