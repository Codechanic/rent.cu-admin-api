import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DeleteResult, Repository, UpdateResult } from "typeorm";

import { HomeStay } from "../model/homestay";

/**
 * House handling service
 */
@Injectable()
export class HouseService {

  /**
   * Service constructor
   * @param houseRepository Instance of TypeORM's repository service
   */
  constructor(
    @InjectRepository(HomeStay)
    private readonly houseRepository: Repository<HomeStay>) {
  }

  /**
   * Find all houses
   */
  async findAll(): Promise<HomeStay[]> {

    /* return all houses, including their relationship with Manager */
    return await this.houseRepository.find();
  }

  /**
   * Find houses by their owner
   * @param ownerId Id of the owner
   */
  async findByOwner(ownerId): Promise<HomeStay[]> {
    return await this.houseRepository.find({ ownerId });
  }

  /**
   * Create a house
   * @param house New house data
   */
  async create(house: HomeStay): Promise<HomeStay> {
    this.setHouseDefaults(house);
    return await this.houseRepository.save(house);
  }

  /**
   * Update a house
   * @param house Modified house data
   */
  async update(house: HomeStay): Promise<UpdateResult> {
    return await this.houseRepository.update(house.id, house);
  }

  /**
   * Delete a house by its id
   * @param id House Id
   */
  async delete(id): Promise<DeleteResult> {
    return await this.houseRepository.delete(id);
  }

  /**
   * Find a house by its id
   * @param id House's id
   */
  async findById(id: any): Promise<HomeStay> {
    return await this.houseRepository.findOne({where: {id}});
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
