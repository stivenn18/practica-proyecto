
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AlquileresService } from './alquileres.service';
import { CreateAlquilerDto } from './dto/create-alquiler.dto';

@Controller('alquileres')
export class AlquileresController {
  constructor(private readonly alquileresService: AlquileresService) {}

  @Post()

  create(@Body() createAlquilerDto: CreateAlquilerDto) {
    return this.alquileresService.create(createAlquilerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alquileresService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.alquileresService.findAll();
  }
}
