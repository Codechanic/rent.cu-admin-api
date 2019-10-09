import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AcmeRole } from './model/acme_role';
import { User } from './model/user';
import { FormModule } from './form/form.module';
import entities from './house/house.entities';
import { HouseModule } from './house/house.module';

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
      entities: [
        User,
        AcmeRole,
        ...entities,
      ],
      database: 'havanacity_db',
      synchronize: true,
      logging: ['query'],
    }),
    AuthModule,
    UsersModule,
    HouseModule,
    FormModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
