import { Controller, Get, Param, ParseIntPipe,Patch } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){}

    @Get()
    async getManyFeed(){
        return await this.feedService.fetchManyFeed()
    }

    @Get('/:id')
    async getFeed(@Param('id', ParseIntPipe) feedId:number){
        return await this.feedService.fetchFeed({feedId})
    }

    @Patch('/:id/likeCount')
    async patchFeedLikeCount(@Param('id', ParseIntPipe) feedId:number){
        return await this.feedService.modifyFeedLikeCount({feedId})
    }
}
