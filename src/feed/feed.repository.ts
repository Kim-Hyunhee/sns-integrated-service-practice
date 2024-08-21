import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import axios from 'axios'

@Injectable()
export class FeedRepository {
    constructor(private prisma:PrismaService){}

    async findManyFeed(){
        return await this.prisma.feed.findMany()
    }

    async findFeed({feedId}:{feedId:number}){
        return await this.prisma.feed.findUnique({where:{feedId}});
    }

    async updateFeedLikeCount({feedId}:{feedId:number}){
        const getFacebookFeed = axios.create({
            baseURL: "https://www.facebook.com/likes/",
            withCredentials: true,
          });

          const getTwitterFeed = axios.create({
            baseURL: "https://www.twitter.com/likes/",
            withCredentials: true,
          });

          const getInstagramFeed = axios.create({
            baseURL: "https://www.instagram.com/likes/",
            withCredentials: true,
          });

          const getThreadsFeed = axios.create({
            baseURL: "https://www.threads.net/likes/",
            withCredentials: true,
          });

          
        const feed = await this.findFeed({feedId});

        if(feed.type === 'facebook'){
            await getFacebookFeed.put(`${feed.contentId}`);
        } else if (feed.type === 'twitter'){
            await getTwitterFeed.put(`${feed.contentId}`);
        } else if( feed.type === 'instagram'){
            await getInstagramFeed.put(`${feed.contentId}`);
        } else{
            await getThreadsFeed.put(`${feed.contentId}`);
        }

        return await this.prisma.feed.update({where:{feedId},data:{likeCount : feed.likeCount +1} })
    }
}

