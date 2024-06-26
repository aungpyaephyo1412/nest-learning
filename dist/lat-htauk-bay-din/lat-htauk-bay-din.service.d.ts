export declare class LatHtaukBayDinService {
    private readonly latHtaukBayDin;
    constructor();
    getAllQuestions(): import("./dto/lat-htauk-bay-din.dto").LatHtaukBayDinQuestion[];
    getNumberLists(): string[];
    getAnswer(questionNo: number, answerNo: number): import("./dto/lat-htauk-bay-din.dto").LatHtaukBayDinAnswer;
}
