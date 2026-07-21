import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('stats')
export class StatsController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getStats() {
    const [
      totalConsultations,
      pendingConsultations,
      reviewedConsultations,
      completedConsultations,
      totalInsights,
      totalAttorneys,
      totalPracticeAreas,
      recentConsultations,
      allConsultations,
    ] = await Promise.all([
      this.prisma.consultation.count(),
      this.prisma.consultation.count({ where: { status: 'pending' } }),
      this.prisma.consultation.count({ where: { status: 'reviewed' } }),
      this.prisma.consultation.count({ where: { status: 'completed' } }),
      this.prisma.insight.count(),
      this.prisma.attorney.count(),
      this.prisma.practiceArea.count(),
      this.prisma.consultation.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      this.prisma.consultation.findMany({
        select: { createdAt: true },
        orderBy: { createdAt: 'asc' },
      }),
    ]);

    // Build monthly trend for the last 6 months
    const now = new Date();
    const monthlyMap: Record<string, number> = {};
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toLocaleString('default', { month: 'short', year: '2-digit' });
      monthlyMap[key] = 0;
    }
    for (const c of allConsultations) {
      const d = new Date(c.createdAt);
      const key = d.toLocaleString('default', { month: 'short', year: '2-digit' });
      if (key in monthlyMap) {
        monthlyMap[key]++;
      }
    }
    const monthlyTrend = Object.entries(monthlyMap).map(([month, count]) => ({ month, count }));

    return {
      totalConsultations,
      consultationsByStatus: [
        { name: 'Pending', value: pendingConsultations, fill: '#f59e0b' },
        { name: 'Reviewed', value: reviewedConsultations, fill: '#3b82f6' },
        { name: 'Completed', value: completedConsultations, fill: '#22c55e' },
      ],
      contentOverview: [
        { name: 'Insights', count: totalInsights },
        { name: 'Attorneys', count: totalAttorneys },
        { name: 'Practice Areas', count: totalPracticeAreas },
        { name: 'Consultations', count: totalConsultations },
      ],
      monthlyTrend,
      recentConsultations,
    };
  }
}
