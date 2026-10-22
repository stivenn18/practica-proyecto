import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entity/cliente.entity';
import { Vehiculo } from '../../vehiculos/entity/vehiculo.entity';

@Entity('alquileres')
export class Alquiler {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @ManyToOne(() => Cliente, { eager: true })
  cliente: Cliente;

  @ManyToOne(() => Vehiculo, { eager: true })
  vehiculo: Vehiculo;
}
