import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedRepository } from './feed.repository';

@Module({
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
  exports:[FeedService]
})
export class FeedModule {}
