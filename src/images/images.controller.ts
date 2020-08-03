import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { ImageService } from "../services/image.service";

@Controller('images')
export class ImagesController {

  constructor(private imageService: ImageService) {
  }

  /**
   * Api endpoint to retrieve all images by their owner's id
   * @description Endpoint is guarded by Passport's jwt strategy
   * (call must be made with Authorization header)
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('/owner/:id')
  async findByOwner(@Param('id') id): Promise<any> {
    return this.imageService.findByOwner(id);
  }

}
