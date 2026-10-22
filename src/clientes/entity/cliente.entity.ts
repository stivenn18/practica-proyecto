import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alquiler } from '../../alquileres/entity/alquiler.entity';


@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 20 })
  telefono: string;

  
}
