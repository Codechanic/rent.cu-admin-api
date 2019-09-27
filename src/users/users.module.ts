import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from '../services/users.service';
import { User } from '../model/user';
import { UsersController } from './users.controller';
import { AcmeRole } from '../model/acme_role';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([AcmeRole, User])],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {
}
