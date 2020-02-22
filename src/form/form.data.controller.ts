import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards, Req } from '@nestjs/common';
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
import { SeasonPriceService } from '../services/season.price.service';
import { HomeStay } from '../model/homestay';
import { AuthGuard } from '@nestjs/passport';
import { log } from 'util';
import { config } from 'rxjs';
import { Season } from '../model/season';

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
   * @param seasonPriceService Instance of SeasonPriceService
   */
  constructor(
    private regionService: RegionService,
    private accommodationTypeService: AccommodationTypeService,
    private extraOptionService: ExtraOptionService,
    private seasonPriceService: SeasonPriceService
  ) {
  }

  /**
   * Api endpoint to retrieve all provinces
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get("/province")
  async Provinces(): Promise<Province[]> {
    return this.regionService.Provinces();
  }

  /**
   * Api endpoint to retrieve all municipalities
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get("/municipality")
  async Municipalities(): Promise<Municipality[]> {
    return this.regionService.Municipalities();
  }

  /**
   * Api endpoint to retrieve all municipalities by Province id
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get("/municipality/province/:provinceId")
  async MunicipalitiesByProvince(@Param("provinceId") provinceId): Promise<Municipality[]> {
    return this.regionService.MunicipalitiesByProvince(provinceId);
  }

  /**
   * Api endpoint to retrieve a municipality by it's id
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get("/municipality/:municipalityId")
  async MunicipalityById(@Param('municipalityId') municipalityId): Promise<Municipality> {
    return this.regionService.MunicipalityById(municipalityId);
  }

  /**
   * Api endpoint to retrieve all municipalities
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @Get("/accommodation")
  async Accommodation(): Promise<AccommodationType[]> {
    return this.accommodationTypeService.findAll();
  }

  @Get("/location")
  async Location(): Promise<LocationType[]> {
    return this.regionService.Location();
  }

  @Get("/freeservice")
  async FreeService(): Promise<FreeService[]> {
    return this.extraOptionService.FreeServices();
  }

  @Get("/place")
  async Place(): Promise<Place[]> {
    return this.regionService.Places();
  }

  @Get("/notoffered")
  async NotOffered(): Promise<NotOffered[]> {
    return this.extraOptionService.NotOffered();
  }

  @Get("/extracost")
  async ExtraCost(): Promise<ExtraCost[]> {
    return this.extraOptionService.ExtraCost();
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/seasons/default")
  async SeasonDefault(): Promise<Season[]> {
    return this.seasonPriceService.getDefaultSeasons();
  }

  /**
   * Get prices by season for a house
   * @param houseId Id of the house
   */
  @UseGuards(AuthGuard("jwt"))
  @Get("/seasons/:id")
  async Season(@Param("id") houseId): Promise<any> {
    return this.seasonPriceService.getSeasonPriceHome(houseId);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/season/update")
  async SeasonUpdate(@Body("homeStayId") homeStayId,
                     @Body("seasonId") seasonId,
                     @Body("price") price
  ): Promise<any> {
    return this.seasonPriceService.setSeasonPrice(homeStayId, seasonId, price);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/season/create")
  async SeasonCreate(@Body("homeStayId") homeStayId, @Body("config") configSeason): Promise<any> {
    return this.seasonPriceService.createSpecialSeason(homeStayId, configSeason);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/range/update")
  async SeasonRangeUpdate(@Body("seasonId") seasonId, @Body("config") configSeason): Promise<any> {
    return this.seasonPriceService.updateSpecialSeason(seasonId, configSeason);
  }
}
