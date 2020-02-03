import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';

import { HouseService } from '../services/house.service';
import { AuthGuard } from '@nestjs/passport';
import { HomeStay } from '../model/homestay';
import { log } from 'util';
import { NotificationService } from '../services/notification.service';

/**
 * House api endpoints
 */
@Controller('house')
export class HouseController {

  /**
   * Controller constructor
   * @param houseService Instance of HouseService
   * @param notificationService
   */
  constructor(private readonly houseService: HouseService, private readonly notificationService: NotificationService) {
  }

  /**
   * Api endpoint to retrieve all houses
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Query() query): Promise<HomeStay[]> {

    /* return all houses retrieved using house service */
    // log(query.take.toString());
    // log(query.skip.toString());
    return this.houseService.findAll(query.take, query.skip);
  }

  /**
   * Api endpoint to count all houses
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('/count')
  async countAll(): Promise<number> {
    return this.houseService.count();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id): Promise<HomeStay> {
    return this.houseService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/owner/:id')
  async findByOwner(@Param('id') id, @Query() query): Promise<HomeStay[]> {
    return this.houseService.findByOwner(id, query.skip, query.take);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() house: HomeStay, @Req() request): Promise<any> {
    return this.houseService
      .create(house)
      .then(() => {
        // @ts-ignore
        const user = request.user;
        this.notificationService.onHouseCreation(user);
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/update')
  async update(@Param('id') id, @Body() house: HomeStay): Promise<any> {
    return await this.houseService.update(house)
      .then((response: any) => {
        this.notificationService.onHouseUpdate();
        return response;
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.houseService.delete(id);
  }

}
