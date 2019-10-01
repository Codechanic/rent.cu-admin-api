import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FreeService } from '../model/homestay_freeservices';

@Injectable()
export class FreeServiceService {
  constructor(
    @InjectRepository(FreeService)
    private freeServiceRepository: Repository<FreeService>) {
  }

  async findAll() {
    return await this.freeServiceRepository.find();
  }
}
