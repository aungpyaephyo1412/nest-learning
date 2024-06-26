import { Test, TestingModule } from '@nestjs/testing';
import { LatHtaukBayDinService } from './lat-htauk-bay-din.service';

describe('LatHtaukBayDinService', () => {
  let service: LatHtaukBayDinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LatHtaukBayDinService],
    }).compile();

    service = module.get<LatHtaukBayDinService>(LatHtaukBayDinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
