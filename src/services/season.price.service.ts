import { Injectable, UnauthorizedException, BadGatewayException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { HomeStayPrice } from '../model/homestay_price';
import { Season } from '../model/season';
import { SeasonRange } from '../model/season_range';
import { HomeStay } from '../model/homestay';
import { HomeStayChain } from '../model/homestay_chain';
import { log } from 'util';

@Injectable()
export class SeasonPriceService {
  constructor(
    @InjectRepository(HomeStayPrice)
    private readonly homeStayPriceRepository: Repository<HomeStayPrice>,
    @InjectRepository(Season)
    private readonly seasonRepository: Repository<Season>,
    @InjectRepository(SeasonRange)
    private readonly seasonRangeRepository: Repository<SeasonRange>,
    @InjectRepository(HomeStay)
    private readonly houseRepository: Repository<HomeStay>,
    @InjectRepository(HomeStayChain)
    private readonly homeStayChainRepository: Repository<HomeStayChain>,
  ) {

  }

  /**
   * Return Home Prices by Season
   * @param id
   */
  async getSeasonPriceHome(id) {
    const homeStay = await this.houseRepository.findOneOrFail(
      {
        where: { id },
        relations: [
          'seasons',
          'chain',
        ],
      },
    );
    let seasons = homeStay.seasons;
    if (seasons.length > 0) {
      const seasonId = seasons.map( s => s.id);
      const price = await this.homeStayPriceRepository.find({
        where: { homestay: id, season: In(seasonId) },
        relations: [
          'season',
        ],
      });
      const seasonRanges = await this.seasonRangeRepository.find({
        where: { season: In(seasonId) },
        relations: [
          'season',
        ],
      });
      seasons =  seasons.map((s: any) => {
        const index =  price.map((p: HomeStayPrice) => p.season.id).lastIndexOf(s.id);
        const ranges = seasonRanges.
        filter((sr: SeasonRange) => sr.season.id === s.id).map( str => {
          return {
            id: str.id,
            start: str.start,
            end: str.end,
          };
        });
        s.price = price[index].price ? price[index].price : 0 ;
        s.seasonRanges = ranges;
        return s;
      });
      return seasons;
    } else {
      let chain = homeStay.chain;
      chain = await this.homeStayChainRepository.findOne({
        where: { id: chain.id },
        relations: [
          'seasons',
        ],
      });
      seasons = chain.seasons;
      const seasonId = seasons.map( s => s.id);
      const price = await this.homeStayPriceRepository.find({
        where: { homestay: id, season: In(seasonId) },
        relations: [
          'season',
        ],
      });
      const seasonRanges = await this.seasonRangeRepository.find({
        where: { season: In(seasonId) },
        relations: [
          'season',
        ],
      });
      seasons =  seasons.map((s: any) => {
        const index =  price.map((p: HomeStayPrice) => p.season ? p.season.id : null).lastIndexOf(s.id);
        const ranges = seasonRanges.
        filter((sr: SeasonRange) => sr.season.id === s.id).map( str => {
          return {
            id: str.id,
            start: str.start,
            end: str.end,
          };
        });
        if (index === -1) {
          s.price = 0;
        } else {
          s.price = price[index].price ? price[index].price : 0;
        }
        s.seasonRanges = ranges;
        return s;
      });
      return seasons;
    }
  }

  async setSeasonPrice(homeStayId: number, seasonId: number, price: number) {
    const homeStay = await this.houseRepository.findOne({ where: { id: homeStayId} });
    const season = await this.seasonRepository.findOne({ where: { id: seasonId} });
    if (homeStay !== undefined &&  season !== undefined) {
      let homeStayPrice = await this.homeStayPriceRepository.findOne({
        where: { homeStay, season  },
      });
      if (homeStayPrice !== undefined) {
        homeStayPrice.price = price;
        homeStayPrice.code = 'HS' + homeStayId + '#' + 'S' + seasonId;
      } else {
        homeStayPrice = new HomeStayPrice();
        homeStayPrice.code = 'HS' + homeStayId + '#' + 'S' + seasonId;
        homeStayPrice.season = season;
        homeStayPrice.homestay = homeStay;
      }
      return await this.homeStayPriceRepository.save(homeStayPrice);
    }
    throw new BadRequestException('Invalid Params');
  }

  async createSpecialSeason(homeStayId: number, config: any) {
    if (homeStayId !== null) {
      const homeStay = await this.houseRepository
        .findOne(
          {
            where: { id: homeStayId },
            relations: [
              'seasons',
            ],
          });
      if (homeStay !== undefined) {
        if (config.hasOwnProperty('name')) {
          let season = new Season();
          season.name = config.name;
          season = await this.seasonRepository.manager.save(season);
          const ranges = [];
          if (config.hasOwnProperty('ranges')) {
            config.ranges.forEach( async r => {
              let seasonRange = new SeasonRange();
              seasonRange.start = r.start;
              seasonRange.end = r.end;
              seasonRange.season = season;
              seasonRange = await this.seasonRangeRepository.manager.save(seasonRange);
              ranges.push(seasonRange);
            });
          }
          homeStay.seasons.push(season);
          return await this.houseRepository.manager.save(homeStay);
        }
      }
    }
    return false;
  }
}
