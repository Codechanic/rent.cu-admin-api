import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';

import { HouseService } from '../services/house.service';
import { AuthGuard } from '@nestjs/passport';
import { HomeStay } from '../model/homestay';

/**
 * House api endpoints
 */
@Controller('house')
export class HouseController {

  /**
   * Controller constructor
   * @param houseService Instance of HouseService
   */
  constructor(private readonly houseService: HouseService) {
  }

  /**
   * Api endpoint to retrieve all houses
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<HomeStay[]> {

    /* return all houses retrieved using house service */
    return this.houseService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id/detail')
  async findOneById(@Param('id') id): Promise<any> {
    return this.houseService.find(id);
  }

  @Get('/owner/:id')
  async findByOwner(@Param('id') id): Promise<HomeStay[]> {
    return this.houseService.findByOwner(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() house: HomeStay) {
    return this.houseService.create(house);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/update')
  async update(@Param('id') id, @Body() house: HomeStay): Promise<any> {
    return this.houseService.update(house);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.houseService.delete(id);
  }

}
