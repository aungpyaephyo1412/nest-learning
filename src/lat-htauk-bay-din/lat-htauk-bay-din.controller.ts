import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LatHtaukBayDinService } from './lat-htauk-bay-din.service';

@ApiTags('lat-htauk-bay-din')
@Controller('lat-htauk-bay-din')
export class LatHtaukBayDinController {
  constructor(private readonly latHtaukBayDinService: LatHtaukBayDinService) {}

  @Get('questions')
  getAllQuestions(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'success',
      data: this.latHtaukBayDinService.getAllQuestions(),
    });
  }
  @Get('number-list')
  getNumberList(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'success',
      data: this.latHtaukBayDinService.getNumberLists(),
    });
  }

  @Get('answer/:questionNo/:answerNo')
  getAnswer(
    @Param('questionNo') questionNo: number,
    @Param('answerNo') answerNo: number,
    @Res() res: Response,
  ) {
    const answer = this.latHtaukBayDinService.getAnswer(questionNo, answerNo);
    if (!answer)
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'not-found',
      });
    res.status(HttpStatus.OK).json({
      message: 'success',
      data: answer,
    });
  }
}
