import { Controller, Get } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){}

    @Get()
    async getManyFeed(){
        return await this.feedService.fetchManyFeed()
    }
}
