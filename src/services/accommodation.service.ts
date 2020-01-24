import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccommodationType } from '../model/accommodationType';

@Injectable()
export class AccommodationTypeService {
  constructor(
    @InjectRepository(AccommodationType)
    private readonly accommodationTypeRepository: Repository<AccommodationType>) {
  }

  async findAll() {
    return await this.accommodationTypeRepository.find();
  }
}
