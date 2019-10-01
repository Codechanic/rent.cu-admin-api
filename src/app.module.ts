import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AcmeRole } from './model/acme_role';
import { User } from './model/user';
import { FormModule } from './form/form.module';
import { Province } from './model/province';
import { ProvinceTranslations } from './model/province_translations';
import { Municipality } from './model/municipality';
import { MunicipalityTranslations } from './model/municipality_translations';
import { AccommodationType } from './model/accommodationType';
import { AccommodationTypeTranslations } from './model/acommodationtype_translations';
import { LocationType } from './model/location';
import { FreeService } from './model/homestay_freeservices';
import { Place } from './model/place';
import { NotOffered } from './model/homestay_notoffered';
import { ExtraCost } from './model/homestay_extracost';

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
        Province,
        ProvinceTranslations,
        Municipality,
        MunicipalityTranslations,
        AccommodationType,
        AccommodationTypeTranslations,
        LocationType,
        FreeService,
        Place,
        NotOffered,
        ExtraCost,
      ],
      database: 'havanacity_db',
      synchronize: true,
      logging: ['query'],
    }),
    AuthModule,
    UsersModule,
    FormModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
