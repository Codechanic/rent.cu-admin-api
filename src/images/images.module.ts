import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ImagesController } from "./images.controller";
import { ImageService } from "../services/image.service";
import { Image } from "../model/image";

@Module({
  providers: [ImageService],
  imports: [TypeOrmModule.forFeature([Image])],
  exports: [ImageService],
  controllers: [ImagesController]
})
export class ImagesModule {
}
