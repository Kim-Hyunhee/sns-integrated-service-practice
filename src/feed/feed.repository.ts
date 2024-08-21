import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FeedRepository {
    constructor(private prisma:PrismaService){}

    async findManyFeed(){
        return await this.prisma.feed.findMany()
    }
}

