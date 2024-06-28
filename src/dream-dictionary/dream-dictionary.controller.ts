import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { DreamDictionaryService } from './dream-dictionary.service';

@Controller('dream-dictionary')
export class DreamDictionaryController {
  constructor(
    private readonly dreamDictionaryService: DreamDictionaryService,
  ) {}

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'success',
      data: this.dreamDictionaryService.getAllDreamList(),
    });
  }
  @Get('/detail/:dreamId')
  find(@Param('dreamId') dreamId: number, @Res() res: Response) {
    const data = this.dreamDictionaryService.getDreamDetailList(+dreamId);
    if (!data.length)
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'not-found',
      });
    res.status(HttpStatus.OK).json({
      message: 'success',
      data,
    });
  }
}
