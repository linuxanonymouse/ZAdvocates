import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { PracticeAreasService } from './practice-areas.service';
import { CreatePracticeAreaDto } from './dto/create-practice-area.dto';
import { UpdatePracticeAreaDto } from './dto/update-practice-area.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('practice-areas')
export class PracticeAreasController {
  constructor(private readonly practiceAreasService: PracticeAreasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPracticeAreaDto: CreatePracticeAreaDto) {
    return this.practiceAreasService.create(createPracticeAreaDto);
  }

  @Get()
  findAll() {
    return this.practiceAreasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const area = await this.practiceAreasService.findOne(id);
    if (!area) {
      throw new NotFoundException('Practice area not found');
    }
    return area;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticeAreaDto: UpdatePracticeAreaDto) {
    return this.practiceAreasService.update(id, updatePracticeAreaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceAreasService.remove(id);
  }
}
