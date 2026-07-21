import { Module } from '@nestjs/common';
import { PracticeAreasService } from './practice-areas.service';
import { PracticeAreasController } from './practice-areas.controller';

@Module({
  controllers: [PracticeAreasController],
  providers: [PracticeAreasService],
})
export class PracticeAreasModule {}
