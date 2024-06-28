import { Test, TestingModule } from '@nestjs/testing';
import { DreamDictionaryController } from './dream-dictionary.controller';
import { DreamDictionaryService } from './dream-dictionary.service';

describe('DreamDictionaryController', () => {
  let controller: DreamDictionaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreamDictionaryController],
      providers: [DreamDictionaryService],
    }).compile();

    controller = module.get<DreamDictionaryController>(
      DreamDictionaryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
