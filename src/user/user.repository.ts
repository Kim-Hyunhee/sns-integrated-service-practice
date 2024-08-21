import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { InsertUser } from "./user.dto";

@Injectable()
export class UserRepository {
    constructor(private prisma:PrismaService){}

    async insertUser(data: InsertUser){
        return await this.prisma.user.create({data})
    }
}

