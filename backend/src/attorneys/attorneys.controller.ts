import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AttorneysService } from './attorneys.service';
import { CreateAttorneyDto } from './dto/create-attorney.dto';
import { UpdateAttorneyDto } from './dto/update-attorney.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('attorneys')
export class AttorneysController {
  constructor(private readonly attorneysService: AttorneysService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAttorneyDto: CreateAttorneyDto) {
    return this.attorneysService.create(createAttorneyDto);
  }

  @Get()
  findAll() {
    return this.attorneysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attorneysService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttorneyDto: UpdateAttorneyDto) {
    return this.attorneysService.update(id, updateAttorneyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attorneysService.remove(id);
  }
}
