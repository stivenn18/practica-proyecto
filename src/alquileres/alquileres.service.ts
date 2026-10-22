import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alquiler } from './entity/alquiler.entity';
import { CreateAlquilerDto } from './dto/create-alquiler.dto';
import { Cliente } from '../clientes/entity/cliente.entity';
import { Vehiculo } from '../vehiculos/entity/vehiculo.entity';

@Injectable()
export class AlquileresService {
  constructor(
    @InjectRepository(Alquiler)
    private readonly alquilerRepository: Repository<Alquiler>,

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,

    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createAlquilerDto: CreateAlquilerDto) {
    const cliente = await this.clienteRepository.findOneBy({
      id: createAlquilerDto.clienteId,
    });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    const vehiculo = await this.vehiculoRepository.findOneBy({
      id: createAlquilerDto.vehiculoId,
    });
    if (!vehiculo) throw new NotFoundException('Vehículo no encontrado');

    const alquiler = this.alquilerRepository.create({
      fecha_inicio: createAlquilerDto.fecha_inicio,
      fecha_fin: createAlquilerDto.fecha_fin,
      cliente,
      vehiculo,
    });

    return this.alquilerRepository.save(alquiler);
  }

  findAll() {
    return this.alquilerRepository.find({
      relations: ['cliente', 'vehiculo'],
    });
  }

  async findOne(id: number) {
    return this.alquilerRepository.findOne({
      where: { id },
      relations: ['cliente', 'vehiculo'], // 👈 trae también los datos relacionados
    });
  }
}
