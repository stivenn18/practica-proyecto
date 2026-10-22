import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entity/cliente.entity';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [TypeOrmModule], // 👈 necesario para que otros módulos (ej: Alquileres) puedan usar Cliente
})
export class ClientesModule {}
