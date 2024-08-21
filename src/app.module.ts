import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [UserModule, PrismaModule, FeedModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
