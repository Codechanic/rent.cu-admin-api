import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from '../services/house.service';
import entities from './house.entities';
import { HouseCreateMailerServiceMiddleware } from '../services/house.create.mailer.service';

@Module({
  controllers: [HouseController],
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [HouseService],
})
export class HouseModule {
}
