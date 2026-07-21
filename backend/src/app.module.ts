import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';
import { InsightsModule } from './insights/insights.module';
import { AttorneysModule } from './attorneys/attorneys.module';
import { PracticeAreasModule } from './practice-areas/practice-areas.module';
import { ConsultationsModule } from './consultations/consultations.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, InsightsModule, AttorneysModule, PracticeAreasModule, ConsultationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
