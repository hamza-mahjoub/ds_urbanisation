import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/Employee.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dbadmin.123',
      database: 'ds_urbanisation',
      entities: [Employee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee])
  ],
  controllers: [AppController, EmployeesController],
  providers: [AppService, EmployeesService],
})
export class AppModule { 
  constructor(private dataSource: DataSource) {}
}
