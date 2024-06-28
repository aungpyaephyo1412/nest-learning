import { Module } from '@nestjs/common';
import { DreamDictionaryController } from './dream-dictionary.controller';
import { DreamDictionaryService } from './dream-dictionary.service';

@Module({
  controllers: [DreamDictionaryController],
  providers: [DreamDictionaryService],
})
export class DreamDictionaryModule {}
