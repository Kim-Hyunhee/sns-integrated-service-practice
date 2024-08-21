import { Injectable } from '@nestjs/common';
import { InsertUser } from './user.dto';
import {  UserRepository } from './user.repository';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
    constructor (
        private repository: UserRepository
    ){}

    async createUser(data:InsertUser){
        const hashedPassword = await bcrypt.hash(data.password, 10);

        return await this.repository.insertUser({...data, password:hashedPassword});
    }
}
