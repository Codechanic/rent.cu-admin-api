import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FreeService } from '../model/homestay_freeservices';
import { ExtraCost } from '../model/homestay_extracost';
import { NotOffered } from '../model/homestay_notoffered';

@Injectable()
export class ExtraOptionService {
  constructor(
    @InjectRepository(FreeService)
    private freeServiceRepository: Repository<FreeService>,
    @InjectRepository(ExtraCost)
    private extraCostRepository: Repository<ExtraCost>,
    @InjectRepository(NotOffered)
    private notOfferedRepository: Repository<NotOffered>,
  ) {
  }

  async FreeServices() {
    return await this.freeServiceRepository.find();
  }

  async ExtraCost() {
    return await this.extraCostRepository.find();
  }

  async NotOffered() {
    return await this.notOfferedRepository.find();
  }
}
