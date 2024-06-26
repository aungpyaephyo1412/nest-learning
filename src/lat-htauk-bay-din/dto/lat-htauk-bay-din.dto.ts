export class LatHtaukBayDinDto {
  answers: LatHtaukBayDinAnswer[];
  questions: LatHtaukBayDinQuestion[];
  numberList: string[];
}
export class LatHtaukBayDinQuestion {
  questionNo: number;
  questionName: string;
}

export class LatHtaukBayDinAnswer {
  questionNo: number;
  answerNo: number;
  answerResult: string;
}
