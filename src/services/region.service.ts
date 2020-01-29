import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Province } from "../model/province";
import { ProvinceTranslations } from "../model/province_translations";
import { Municipality } from "../model/municipality";
import { MunicipalityTranslations } from "../model/municipality_translations";
import { LocationType } from "../model/location";
import { Place } from "../model/place";

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
    private readonly placeRepository: Repository<Place>
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
    return await this.municipalityRepository.find({ relations: ["province"] });
  }

  /**
   * Find all locations
   */
  async Location() {
    return await this.locationRepository.find();
  }

  /**
   * Find all places
   */
  async Places() {
    return await this.placeRepository.find({ relations: ["municipality"] });
  }

  /**
   * Find al municipalities by province id
   * @param provinceId Province id associated to the Municipality
   */
  async MunicipalitiesByProvince(provinceId: any) {
    return await this.municipalityRepository.find({ where: { province: provinceId } });
  }

  /**
   * Find a municipality by it's id
   * @param municipalityId Id of the municipality to retrieve
   * @constructor
   */
  async MunicipalityById(municipalityId: any) {
    return await this.municipalityRepository.findOne({ where: { id: municipalityId } });
  }
}
