import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { InsertUser } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('/register')
    async postUser(@Body() body:InsertUser){
        return await this.userService.createUser(body)
    }

}
