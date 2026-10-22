
import { IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  correo: string;
}
