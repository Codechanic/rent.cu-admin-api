import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManagerController } from './manager.controller';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../model/manager.entity';

@Module({
  controllers: [ManagerController],
  imports: [TypeOrmModule.forFeature([Manager])],
  exports: [ManagerService],
  providers: [ManagerService],
})
export class ManagerModule {
}
