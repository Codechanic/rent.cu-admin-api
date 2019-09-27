import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { HouseModule } from './house/house.module';
import { UsersModule } from './users/users.module';
import { ManagerModule } from './manager/manager.module';
import { User } from './model/user';

/**
 * Main app module
 * @description This module holds the configuration of TypeORM
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'havanacity_db_dev',
      entities: [User],
      synchronize: true,
      logging: ['query'],
    }),
    HouseModule,
    AuthModule,
    UsersModule,
    ManagerModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
