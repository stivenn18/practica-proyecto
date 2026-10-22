import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { AlquileresModule } from './alquileres/alquileres.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'alquileres_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true, 
    }),
    ClientesModule,
    VehiculosModule,
    AlquileresModule,
  ],
})
export class AppModule {}
