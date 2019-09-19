import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from '../model/house.entity';
import { HouseService } from '../services/house.service';

@Module({
  controllers: [HouseController],
  imports: [TypeOrmModule.forFeature([House])],
  providers: [HouseService],
})
export class HouseModule {
}
