import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AcmeRole } from './model/acme_role';
import { User } from './model/user';
import { FormModule } from './form/form.module';
import { HouseModule } from './house/house.module';
import { ImagesModule } from "./images/images.module";
import entities from './house/house.entities';
import { Image } from "./model/image";

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
      username: 'havanacity_usr',
      password: 'Bhs26t*1',
      entities: [
        User,
        AcmeRole,
        Image,
        ...entities,
      ],
      database: 'havanacity_db_dev',
      synchronize: true,
      logging: ['query'],
    }),
    MailerModule.forRoot({
      transport: 'smtp://localhost',
      defaults: {
        from: '"booking.rent.cu" <booking@rent.cu>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    AuthModule,
    UsersModule,
    HouseModule,
    FormModule,
    ImagesModule
  ],
  controllers: [AppController],
})
export class AppModule {
}
