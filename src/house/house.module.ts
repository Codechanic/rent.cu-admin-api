import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HouseController } from './house.controller';
import { HouseService } from '../services/house.service';
import { CommentService } from '../services/comment.service';
import { CommentController } from './comment.controller';
import { NotificationService } from '../services/notification.service';
import entities from './house.entities';

@Module({
  controllers: [HouseController, CommentController],
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [HouseService, CommentService, NotificationService],
})
export class HouseModule {
}
