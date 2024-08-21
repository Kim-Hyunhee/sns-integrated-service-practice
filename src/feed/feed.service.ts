import { Injectable } from '@nestjs/common';
import { FeedRepository } from './feed.repository';

@Injectable()
export class FeedService {
    constructor(private repository: FeedRepository){}

    async fetchManyFeed(){
        return await this.repository.findManyFeed()
    }

    async fetchFeed({feedId}:{feedId:number}){
        return await this.repository.findFeed({feedId})
    }

    async modifyFeedLikeCount ({feedId}:{feedId:number}) {
        return await this.repository.updateFeedLikeCount({feedId})
    }

    async modifyFeedShareCount ({feedId}:{feedId:number}) {
        return await this.repository.updateFeedShareCount({feedId})
    }
}
