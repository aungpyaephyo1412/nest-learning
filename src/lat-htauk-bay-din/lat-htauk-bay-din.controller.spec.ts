import { Test, TestingModule } from '@nestjs/testing';
import { LatHtaukBayDinController } from './lat-htauk-bay-din.controller';
import { LatHtaukBayDinService } from './lat-htauk-bay-din.service';

describe('LatHtaukBayDinController', () => {
  let controller: LatHtaukBayDinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatHtaukBayDinController],
      providers: [LatHtaukBayDinService],
    }).compile();

    controller = module.get<LatHtaukBayDinController>(LatHtaukBayDinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
