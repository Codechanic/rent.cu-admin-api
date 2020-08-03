import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Image } from "../model/image";
import { FindManyOptions, Repository } from "typeorm";

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Image)
      private readonly imageRepository: Repository<Image>
  ) {
  }

  async findByOwner(houseId): Promise<any> {

    const options: FindManyOptions = {
      where: { owner: `homestay_${houseId}`, deletedAt: null }
    };

    return await this.imageRepository.find(options);
  }
}
