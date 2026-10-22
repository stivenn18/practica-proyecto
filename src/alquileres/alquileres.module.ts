import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alquiler } from './entity/alquiler.entity';
import { AlquileresService } from './alquileres.service';
import { AlquileresController } from './alquileres.controller';
import { ClientesModule } from '../clientes/clientes.module';
import { VehiculosModule } from '../vehiculos/vehiculos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alquiler]),
    ClientesModule,   // 👈 importa para poder usar Cliente
    VehiculosModule,  // 👈 importa para poder usar Vehiculo
  ],
  controllers: [AlquileresController],
  providers: [AlquileresService],
})
export class AlquileresModule {}
