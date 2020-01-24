import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormDataController } from './form.data.controller';
import { HomeStay } from '../model/homestay';
import { RegionService } from '../services/region.service';

// tslint:disable-next-line:no-empty
describe('Form Data Controller', () => {
  let controller = FormDataController;
  let regionService = RegionService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormDataController],
      providers: [
        RegionService,
        {
          provide: getRepositoryToken(HomeStay),
          useClass: Repository,
        },
      ],
    }).compile();
    // @ts-ignore
    controller = module.get<FormDataController>(FormDataController);

    // @ts-ignore
    regionService = module.get<RegionService>(RegionService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should retrieve all provinces', async () => {
    jest.spyOn(regionService.prototype, 'Provinces');
    controller.prototype.Provinces();
    expect(regionService.prototype.Provinces).toBeCalled();
  });
})
