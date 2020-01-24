import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';

import { HouseService } from '../services/house.service';
import { AuthGuard } from '@nestjs/passport';
import { HomeStay } from '../model/homestay';
import { MailerService } from '@nest-modules/mailer';
import { log } from 'util';

/**
 * House api endpoints
 */
@Controller('house')
export class HouseController {

  /**
   * Controller constructor
   * @param houseService Instance of HouseService
   * @param mailerService Instance of MailerService
   */
  constructor(private readonly houseService: HouseService, private readonly mailerService: MailerService) {
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
    log(query.take.toString());
    log(query.skip.toString());
    return this.houseService.findAll(query.take, query.skip);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id') id): Promise<HomeStay> {
    return this.houseService.findById(id);
  }

  @Get('/owner/:id')
  async findByOwner(@Param('id') id): Promise<HomeStay[]> {
    return this.houseService.findByOwner(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() house: HomeStay, @Req() request: any) {
    return this.houseService
      .create(house)
      .then(() => {
        // @ts-ignore
        const user = request.user;
        this
          .mailerService
          .sendMail({
            // @ts-ignore
            to: user.username,
            from: 'booking@rent.cu',
            subject: 'Usted ha creado una casa  ✔',
            text: 'Usted ha creado una casa',
            html: '<b>Usted ha creado una casa</b>',
          });
        this
          .mailerService
          .sendMail({
            to: 'booking@rent.cu',
            from: 'noreply@nestjs.com',
            subject: 'Usted ha creado una casa  ✔',
            text: 'Usted ha creado una casa',
            html: '<b>Usted ha creado una casa</b>',
          });
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/update')
  async update(@Param('id') id, @Body() house: HomeStay): Promise<any> {
    return this.houseService.update(house)
      .then((response: any) => {
        this
          .mailerService
          .sendMail({
            to: 'booking@rent.cu',
            from: 'booking@rent.cu',
            subject: 'Se ha actualizado la casa  ✔',
            text: 'Se ha actualizado la casa',
            html: '<b>Se ha actualizado la casa</b>',
          });
      })
      ;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.houseService.delete(id);
  }

}
