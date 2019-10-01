import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RegionService } from '../services/region.service';
import { Province } from '../model/province';
import { Municipality } from '../model/municipality';
import { AccommodationTypeService } from '../services/accommodation.service';
import { AccommodationType } from '../model/accommodationType';
import { LocationType } from '../model/location';
import { FreeService } from '../model/homestay_freeservices';
import { FreeServiceService } from '../services/freeservice.service';
import { Place } from '../model/place';
import { ExtraOptionService } from '../services/extra.option.service';
import { NotOffered } from '../model/homestay_notoffered';
import { ExtraCost } from '../model/homestay_extracost';

/**
 * Form data controller api, for filling dropdowns on house forms
 */
@Controller('form/data')
export class FormDataController {
  /**
   * Controller constructor
   * @param regionService Instance of RegionService
   * @param accommodationTypeService Instance of AccommodationTypeService
   * @param extraOptionService Instance of AccommodationTypeService
   */
  constructor(
    private regionService: RegionService,
    private accommodationTypeService: AccommodationTypeService,
    private extraOptionService: ExtraOptionService,
  ) {
  }

  /**
   * Api endpoint to retrieve all provinces
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get('/province')
  async Provinces(): Promise<Province[]> {
    return this.regionService.Provinces();
  }

  /**
   * Api endpoint to retrieve all municipalities
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get('/municipality')
  async Municipalities(): Promise<Municipality[]> {
    return this.regionService.Municipalities();
  }

  /**
   * Api endpoint to retrieve all municipalities
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get('/accommodation')
  async Accommodation(): Promise<AccommodationType[]> {
    return this.accommodationTypeService.findAll();
  }

  @Get('/location')
  async Location(): Promise<LocationType[]> {
    return this.regionService.Location();
  }

  @Get('/freeservice')
  async FreeService(): Promise<FreeService[]> {
    return this.extraOptionService.FreeServices();
  }

  @Get('/place')
  async Place(): Promise<Place[]> {
    return this.regionService.Places();
  }

  @Get('/notoffered')
  async NotOffered(): Promise<NotOffered[]> {
    return this.extraOptionService.NotOffered();
  }

  @Get('/extracost')
  async ExtraCost(): Promise<ExtraCost[]> {
    return this.extraOptionService.ExtraCost();
  }
}
