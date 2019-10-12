import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HomeStay } from '../model/homestay';

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
  async find(id): Promise<HomeStay[]> {
    return await this.houseRepository.find({id});
  }

  async findByOwner(id): Promise<HomeStay[]> {
    return await this.houseRepository.find({ ownerId: id });
  }

  /**
   * Create a house
   * @param house New house data
   */
  async create(house: HomeStay): Promise<HomeStay> {
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
}
