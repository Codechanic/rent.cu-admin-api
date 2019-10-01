import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Province } from '../model/province';
import { ProvinceTranslations } from '../model/province_translations';
import { Municipality } from '../model/municipality';
import { MunicipalityTranslations } from '../model/municipality_translations';
import { LocationType } from '../model/location';
import { Place } from '../model/place';

/**
 * Region handling service
 */
@Injectable()
export class RegionService {
  /**
   * Service constructor
   * @param provinceRepository Instance of TypeORM's repository service
   * @param provinceTranslationRepository Instance of TypeORM's repository service
   * @param municipalityRepository Instance of TypeORM's repository service
   * @param municipalityTranslationRepository Instance of TypeORM's repository service
   * @param locationRepository Instance of TypeORM's repository service
   * @param placeRepository Instance of TypeORM's repository service
   */
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
    @InjectRepository(ProvinceTranslations)
    private readonly provinceTranslationRepository: Repository<ProvinceTranslations>,
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
    @InjectRepository(MunicipalityTranslations)
    private readonly municipalityTranslationRepository: Repository<MunicipalityTranslations>,
    @InjectRepository(LocationType)
    private readonly locationRepository: Repository<LocationType>,
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {
  }

  /**
   * Find all provinces
   */
  async Provinces() {
    return await this.provinceRepository.find();
  }

  /**
   * Find all municipalities
   */
  async Municipalities() {
    return await this.municipalityRepository.find();
  }

  async Location() {
    return await this.locationRepository.find();
  }

  async Places() {
    return await this.placeRepository.find();
  }

}
