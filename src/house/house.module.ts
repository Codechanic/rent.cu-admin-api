import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from '../services/house.service';
import entities from './house.entities';
import { HouseCreateMailerServiceMiddleware } from '../services/house.create.mailer.service';
import { CommentService } from '../services/comment.service';
import { CommentController } from './comment.controller';

@Module({
  controllers: [HouseController, CommentController],
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [HouseService, CommentService],
})
export class HouseModule {
}
