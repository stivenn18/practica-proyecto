import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAlquilerDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_inicio: Date;

  @IsDateString()
  @IsNotEmpty()
  fecha_fin: Date;

  @IsInt()
  @IsNotEmpty()8
  clienteId: number;

  @IsInt()
  @IsNotEmpty()
  vehiculoId: number;

  
}
