import { Injectable } from '@nestjs/common';
import { CreatePracticeAreaDto } from './dto/create-practice-area.dto';
import { UpdatePracticeAreaDto } from './dto/update-practice-area.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PracticeAreasService {
  constructor(private prisma: PrismaService) {}

  create(createPracticeAreaDto: CreatePracticeAreaDto) {
    return this.prisma.practiceArea.create({
      data: createPracticeAreaDto,
    });
  }

  findAll() {
    return this.prisma.practiceArea.findMany();
  }

  findOne(idOrSlug: string) {
    const numericId = parseInt(idOrSlug, 10);
    if (!Number.isNaN(numericId)) {
      return this.prisma.practiceArea.findUnique({
        where: { id: numericId },
        include: { attorneys: true },
      });
    }
    return this.prisma.practiceArea.findUnique({
      where: { slug: idOrSlug },
      include: { attorneys: true },
    });
  }

  update(id: number, updatePracticeAreaDto: UpdatePracticeAreaDto) {
    return this.prisma.practiceArea.update({
      where: { id },
      data: updatePracticeAreaDto,
    });
  }

  remove(id: number) {
    return this.prisma.practiceArea.delete({
      where: { id }
    });
  }
}
