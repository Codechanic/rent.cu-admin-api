import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HomeStay } from '../model/homestay';

@Injectable()
export class HomeStayService {
  constructor(
    @InjectRepository(HomeStay)
    private readonly houseRepository: Repository<HomeStay>) {
  }

  async findAll(): Promise<HomeStay[]> {
    return await this.houseRepository.find();
  }
}
