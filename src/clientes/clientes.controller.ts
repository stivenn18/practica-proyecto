// clientes.controller.ts
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
