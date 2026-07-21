import { Module } from '@nestjs/common';
import { AttorneysService } from './attorneys.service';
import { AttorneysController } from './attorneys.controller';

@Module({
  controllers: [AttorneysController],
  providers: [AttorneysService],
})
export class AttorneysModule {}
