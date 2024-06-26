import { Injectable } from '@nestjs/common';
import LatHtaukBayDinDb from '../content/lat-htauk-bay-din.db';
import { LatHtaukBayDinDto } from './dto/lat-htauk-bay-din.dto';

@Injectable()
export class LatHtaukBayDinService {
  private readonly latHtaukBayDin: LatHtaukBayDinDto;
  constructor() {
    this.latHtaukBayDin = LatHtaukBayDinDb;
  }

  getAllQuestions() {
    return this.latHtaukBayDin.questions;
  }

  getNumberLists() {
    return this.latHtaukBayDin.numberList;
  }

  getAnswer(questionNo: number, answerNo: number) {
    return this.latHtaukBayDin.answers.find(
      (x) => x.questionNo == questionNo && x.answerNo == answerNo,
    );
  }
}
