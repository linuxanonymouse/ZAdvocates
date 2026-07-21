import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ConsultationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; email: string; phone?: string; message: string }) {
    return this.prisma.consultation.create({ data });
  }

  async findAll() {
    return this.prisma.consultation.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.consultation.update({
      where: { id },
      data: { status },
    });
  }

  async remove(id: string) {
    return this.prisma.consultation.delete({ where: { id } });
  }
}
