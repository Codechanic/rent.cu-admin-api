import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DeleteResult, FindManyOptions, Repository } from "typeorm";

import { HomeStay } from "../model/homestay";
import { FreeService } from "../model/homestay_freeservices";
import { Season } from "../model/season";
import { HomeStayChain } from "../model/homestay_chain";
import { HomeStayPrice } from "../model/homestay_price";

/**
 * House handling service
 */
@Injectable()
export class HouseService {

  /**
   * Service constructor
   * @param houseRepository Instance of TypeORM's repository service for HomeStay
   * @param freeServiceRepository Instance of TypeORM's repository service for FreeService
   * @param seasonRepository
   * @param homeStayChainRepository
   * @param homestayPriceRepository
   */
  constructor(
    @InjectRepository(HomeStay)
    private readonly houseRepository: Repository<HomeStay>,
    @InjectRepository(FreeService)
    private readonly freeServiceRepository: Repository<FreeService>,
    @InjectRepository(Season)
    private readonly seasonRepository: Repository<Season>,
    @InjectRepository(HomeStayChain)
    private readonly homeStayChainRepository: Repository<HomeStayChain>,
    @InjectRepository(HomeStayPrice)
    private readonly homestayPriceRepository: Repository<HomeStayPrice>,
  ) {
  }

  /**
   * Find all houses
   */
  async findAll(take, skip, sortField, sortDirection): Promise<{ data: HomeStay[], count: number }> {

    const options: FindManyOptions = {};

    const housesCount = await this.houseRepository.count(options);

    if (skip) {
      options.skip = skip;
    }
    if (take) {
      options.take = take;
    }
    if (sortField && sortDirection) {
      options.order = {};
      options.order[sortField] = sortDirection;
    }

    options.where = {
      deletedAt: null,
    }

    const houses = await this.houseRepository.find(options);

    return { data: houses, count: housesCount };

  }

  /**
   * Find houses by their owner
   */
  async findByOwner(ownerId, skip, take, sortField, sortDirection)
    : Promise<{ data: HomeStay[], count: number }> {

    const options: FindManyOptions = {
      where: { ownerId, deletedAt: null },
    };

    const housesCount = await this.houseRepository.count(options);

    if (skip) {
      options.skip = skip;
    }
    if (take) {
      options.take = take;
    }
    if (sortField && sortDirection) {
      options.order = {};
      options.order[sortField] = sortDirection;
    }

    const houses = await this.houseRepository.find(options);

    return { data: houses, count: housesCount };
  }

  /**
   * Count houses
   */
  async count() {
    return await this.houseRepository.count();
  }

  /**
   * Create a house
   * @param house New house data
   */
  async create(house: HomeStay): Promise<HomeStay> {
    // set house default values
    this.setHouseDefaults(house);

    // specially handle homestayPrices as that relationship es tricky
    const homestayPrices: HomeStayPrice[] = JSON.parse(JSON.stringify(house.homestayPrices));
    house.homestayPrices = [];

    // save the new house without the homestayPrices
    const createdHouse = await this.houseRepository.save(house);

    // save each homestayPrice with the newly created house associated
    for (const homestayPrice of homestayPrices) {
      homestayPrice.homestay = createdHouse;
    }
    const createdHomestayPrices = await this.homestayPriceRepository.save<HomeStayPrice>(homestayPrices);

    // update every homestayPrice code that was not set because the associated season needed to be saved first
    for (const homestayPrice of createdHomestayPrices) {
      if (homestayPrice.code === '1') {
        homestayPrice.code = 'HS#' + createdHouse.id + 'S#' + homestayPrice.season.id;
        await this.homestayPriceRepository.update(homestayPrice.id, homestayPrice);
      }
    }

    // return the newly created house with the homestayPrices properly associated
    return await this.findById(createdHouse.id);
  }

  /**
   * Update a house
   * @param house Modified house data
   */
  async update(house: HomeStay): Promise<HomeStay[]> {
    const houseToUpdate = await this.houseRepository.manager.findOne(HomeStay, house.id);
    for (const property in house) {
      if (house.hasOwnProperty(property) && property !== 'id') {
        houseToUpdate[property] = house[property];
      }
    }
    const updatedHouses = await this.houseRepository.manager.save<HomeStay>([houseToUpdate]);

    for (const updatedHouse of updatedHouses) {
      // update every homestayPrice code that was not set because the associated season needed to be saved first
      for (const homestayPrice of updatedHouse.homestayPrices) {
        if (homestayPrice.code === '1') {
          homestayPrice.code = 'HS#' + updatedHouse.id + 'S#' + homestayPrice.season.id;
          await this.homestayPriceRepository.update(homestayPrice.id, homestayPrice);
        }
      }
    }

    return updatedHouses;
  }

  /**
   * Delete a house by its id
   * @param id House Id
   */
  async delete(id): Promise<any> {
    const houseToUpdate = await this.houseRepository.manager.findOne(HomeStay, id);
    const date = new Date();
    houseToUpdate.deletedAt = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    return await this.houseRepository.manager.save<HomeStay>([houseToUpdate]);
  }

  /**
   * Find a house by its id
   * @param id House's id
   */
  async findById(id: any): Promise<any> {

    // it's necessary to use the query builder to retrieve the second level relationship of province
    // homestay -> municipality -> province
    return await this.houseRepository.createQueryBuilder('homestay')
      .leftJoinAndSelect('homestay.municipality', 'municipality')
      .leftJoinAndSelect('homestay.accommodation', 'accommodation')
      .leftJoinAndSelect('homestay.homestayFreeservices', 'homestayFreeservices')
      .leftJoinAndSelect('homestay.homestayNotOffered', 'homestayNotOffered')
      .leftJoinAndSelect('homestay.homestayExtracosts', 'homestayExtracosts')
      .leftJoinAndSelect('homestay.places', 'places')
      .leftJoinAndSelect('municipality.province', 'province')
      // season and prices
      .leftJoinAndSelect('homestay.homestayPrices', 'homestayPrices')
      .leftJoinAndSelect('homestayPrices.season', 'season')
      .leftJoinAndSelect('season.seasonRanges', 'seasonRanges')
      .leftJoinAndSelect('homestay.chain', 'chain')
      .leftJoinAndSelect('chain.seasons', 'default_seasons')
      .where('homestay.id = :homestayId')
      .andWhere('homestay.deletedAt IS NULL')
      .setParameter('homestayId', id)
      .getOne();
  }

  /**
   * Set default values for house properties
   * @param house House to modify
   */
  private setHouseDefaults(house: HomeStay) {
    house.slug = house.name.replace(/\s/g, '-').toLowerCase();
    house.promo = false;
    house.enabled = false;
    house.comision = 5;
    house.showcontact = false;
    house.rank = 0;
    house.showHome = false;
    house.note = '';
  }
}
