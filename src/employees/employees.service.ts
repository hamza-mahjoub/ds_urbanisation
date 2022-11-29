import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './Employee.entity';
@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private employeesRepository: Repository<Employee>,
    ) { }

    findAll(): Promise<Employee[]> {
        return this.employeesRepository.find();
    }

    findOne(id: number): Promise<Employee> {
        return this.employeesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.employeesRepository.delete(id);
    }

    createBook(employee: Employee): Promise<Employee> {
        return this.employeesRepository.save(employee);
    }
}
