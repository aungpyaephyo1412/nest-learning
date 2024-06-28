import { Injectable } from '@nestjs/common';
import LatHtaukBayDinDb from '../content/lat-htauk-bay-din.db';
import { LatHtaukBayDinDto } from './dto/lat-htauk-bay-din.dto';

@Injectable()
export class LatHtaukBayDinService {
  private readonly _latHtaukBayDin: LatHtaukBayDinDto;
  constructor() {
    this._latHtaukBayDin = LatHtaukBayDinDb;
  }

  getAllQuestions() {
    return this._latHtaukBayDin.questions;
  }

  getNumberLists() {
    return this._latHtaukBayDin.numberList;
  }

  getAnswer(questionNo: number, answerNo: number) {
    return this._latHtaukBayDin.answers.find(
      (x) => x.questionNo == questionNo && x.answerNo == answerNo,
    );
  }
}
