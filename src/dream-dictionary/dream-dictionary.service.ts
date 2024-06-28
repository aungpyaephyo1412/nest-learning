import { Injectable } from '@nestjs/common';
import DreamDictionaryDb from '../content/dream-dictionary-db';
import { CreateDreamDictionaryDto } from './dto/dream-dictionary.dto';

@Injectable()
export class DreamDictionaryService {
  private readonly _dreamDictionaryDb: CreateDreamDictionaryDto;
  constructor() {
    this._dreamDictionaryDb = DreamDictionaryDb;
  }

  getAllDreamList() {
    return this._dreamDictionaryDb.BlogHeader;
  }

  getDreamDetailList(dreamId: number) {
    return this._dreamDictionaryDb.BlogDetail.filter(
      (x) => x.BlogId === dreamId,
    );
  }
}
