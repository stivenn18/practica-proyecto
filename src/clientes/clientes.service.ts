import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entity/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(dto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(dto);
    return this.clienteRepository.save(cliente);
  }

  async findAll() {
    return this.clienteRepository.find();
  }

  async findOne(id: number) {
    return this.clienteRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}
