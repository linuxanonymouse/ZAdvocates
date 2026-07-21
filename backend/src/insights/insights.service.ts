import { Injectable } from '@nestjs/common';
import { CreateInsightDto } from './dto/create-insight.dto';
import { UpdateInsightDto } from './dto/update-insight.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class InsightsService {
  constructor(private prisma: PrismaService) {}

  create(createInsightDto: CreateInsightDto) {
    return this.prisma.insight.create({
      data: createInsightDto,
    });
  }

  findAll() {
    return this.prisma.insight.findMany({
      orderBy: { publishedAt: 'desc' }
    });
  }

  findOne(id: number) {
    return this.prisma.insight.findUnique({
      where: { id }
    });
  }

  update(id: number, updateInsightDto: UpdateInsightDto) {
    return this.prisma.insight.update({
      where: { id },
      data: updateInsightDto,
    });
  }

  remove(id: number) {
    return this.prisma.insight.delete({
      where: { id }
    });
  }
}
