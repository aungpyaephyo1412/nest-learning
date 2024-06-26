export declare class LatHtaukBayDinDto {
    answers: LatHtaukBayDinAnswer[];
    questions: LatHtaukBayDinQuestion[];
    numberList: string[];
}
export declare class LatHtaukBayDinQuestion {
    questionNo: number;
    questionName: string;
}
export declare class LatHtaukBayDinAnswer {
    questionNo: number;
    answerNo: number;
    answerResult: string;
}
