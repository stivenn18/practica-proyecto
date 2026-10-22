import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alquiler } from '../../alquileres/entity/alquiler.entity';

@Entity('vehiculos')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  marca: string;

  @Column({ length: 50 })
  modelo: string;

  @Column()
  anio: number;

  @Column({ unique: true, length: 20 })
  matricula: string;

  @OneToMany(() => Alquiler, (alquiler) => alquiler.vehiculo)
  alquileres: Alquiler[];
}
