import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsInt()
  anio: number;

  @IsString()
  @IsNotEmpty()
  matricula: string;
}
