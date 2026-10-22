import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entity/vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  create(createVehiculoDto: CreateVehiculoDto) {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return this.vehiculoRepository.save(vehiculo);
  }

  findAll() {
    return this.vehiculoRepository.find();
  }

  async findOne(id: number) {
    return this.vehiculoRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateVehiculoDto) {
    await this.vehiculoRepository.update(id, dto);
    return this.findOne(id);
  }
}
