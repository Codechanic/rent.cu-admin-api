import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormDataController } from './form.data.controller';
import { Municipality } from '../model/municipality';
import { MunicipalityTranslations } from '../model/municipality_translations';
import { Province } from '../model/province';
import { ProvinceTranslations } from '../model/province_translations';
import { RegionService } from '../services/region.service';
import { AccommodationTypeService } from '../services/accommodation.service';
import { AccommodationType } from '../model/accommodationType';
import { AccommodationTypeTranslations } from '../model/acommodationtype_translations';
import { LocationType } from '../model/location';
import { FreeService } from '../model/homestay_freeservices';
import { FreeServiceService } from '../services/freeservice.service';
import { Place } from '../model/place';
import { ExtraOptionService } from '../services/extra.option.service';
import { NotOffered } from '../model/homestay_notoffered';
import { ExtraCost } from '../model/homestay_extracost';

@Module({
  controllers: [FormDataController],
  imports: [TypeOrmModule.forFeature(
    [
      Municipality,
      MunicipalityTranslations,
      Province,
      ProvinceTranslations,
      AccommodationType,
      AccommodationTypeTranslations,
      LocationType,
      FreeService,
      Place,
      NotOffered,
      ExtraCost,
    ])],
  providers: [RegionService, AccommodationTypeService, FreeServiceService, ExtraOptionService],
  exports: [RegionService, AccommodationTypeService, FreeServiceService, ExtraOptionService],
})
export class FormModule {
}
