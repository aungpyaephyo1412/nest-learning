import { Response } from 'express';
import { LatHtaukBayDinService } from './lat-htauk-bay-din.service';
export declare class LatHtaukBayDinController {
    private readonly latHtaukBayDinService;
    constructor(latHtaukBayDinService: LatHtaukBayDinService);
    getAllQuestions(res: Response): void;
    getNumberList(res: Response): void;
    getAnswer(questionNo: number, answerNo: number, res: Response): Response<any, Record<string, any>>;
}
