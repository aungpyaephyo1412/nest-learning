import { Module } from '@nestjs/common';
import { LatHtaukBayDinController } from './lat-htauk-bay-din.controller';
import { LatHtaukBayDinService } from './lat-htauk-bay-din.service';

@Module({
  controllers: [LatHtaukBayDinController],
  providers: [LatHtaukBayDinService],
})
export class LatHtaukBayDinModule {}
