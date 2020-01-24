import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { HouseController } from './house.controller';
import { HouseService } from '../services/house.service';
import { Repository } from 'typeorm';
import { HomeStay } from '../model/homestay';

describe('House Controller', () => {
  let controller: HouseController;
  let houseService: HouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseController],
      providers: [
        HouseService,
        {
          provide: getRepositoryToken(HomeStay),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<HouseController>(HouseController);
    houseService = module.get<HouseService>(HouseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should retrieve all houses from house service', async () => {
    jest.spyOn(houseService, 'findAll');
    controller.findAll();
    expect(houseService.findAll).toBeCalled();
  });

  it('should create a new house using house service', async () => {
    jest.spyOn(houseService, 'create');
    const house = new HomeStay();
    controller.create(house);
    expect(houseService.create).toBeCalledWith(house);
  });

  it('should update a house by its id using house service', async () => {
    jest.spyOn(houseService, 'update');
    const house = new HomeStay();
    controller.update(1, house);
    expect(houseService.update).toBeCalledWith(house);
  });

  it('should delete a house by its id using house service', async () => {
    jest.spyOn(houseService, 'delete');
    controller.delete(1);
    expect(houseService.delete).toBeCalledWith(1);
  });
});
