import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entity/vehiculo.entity';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculosController],
  providers: [VehiculosService],
  exports: [TypeOrmModule], // 
})
export class VehiculosModule {}
