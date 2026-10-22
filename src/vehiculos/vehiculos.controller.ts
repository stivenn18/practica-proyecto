// vehiculos.controller.ts
import { Controller, Get, Put, Param, Body, Post } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  create(@Body() createVehiculoDto: any) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculosService.update(+id, updateVehiculoDto);
  }
}