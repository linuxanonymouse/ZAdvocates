import { Injectable } from '@nestjs/common';
import { CreateAttorneyDto } from './dto/create-attorney.dto';
import { UpdateAttorneyDto } from './dto/update-attorney.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AttorneysService {
  constructor(private prisma: PrismaService) {}

  create(createAttorneyDto: CreateAttorneyDto) {
    return this.prisma.attorney.create({
      data: createAttorneyDto,
    });
  }

  findAll() {
    return this.prisma.attorney.findMany();
  }

  findOne(id: number) {
    return this.prisma.attorney.findUnique({
      where: { id },
      include: { practiceAreas: true }
    });
  }

  update(id: number, updateAttorneyDto: UpdateAttorneyDto) {
    return this.prisma.attorney.update({
      where: { id },
      data: updateAttorneyDto,
    });
  }

  remove(id: number) {
    return this.prisma.attorney.delete({
      where: { id }
    });
  }
}
