import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from '../services/house.service';
import entities from './house.entities';
import { CommentService } from '../services/comment.service';
import { CommentController } from './comment.controller';
import { NotificationService } from '../services/notification.service';

@Module({
  controllers: [HouseController, CommentController],
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [HouseService, CommentService, NotificationService],
})
export class HouseModule {
}
