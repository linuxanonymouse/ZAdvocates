import { Module } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ConsultationsController } from './consultations.controller';
import { StatsController } from './stats.controller';

@Module({
  providers: [ConsultationsService],
  controllers: [ConsultationsController, StatsController],
})
export class ConsultationsModule {}
