import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from '../services/house.service';
import entities from './house.entities';

@Module({
  controllers: [HouseController],
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [HouseService],
})
export class HouseModule {
}
