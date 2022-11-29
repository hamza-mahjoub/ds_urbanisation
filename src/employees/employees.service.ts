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

    async removeEmployee(id: number): Promise<void> {
        await this.employeesRepository.delete(id);
    }

    createEmployee(employee: Employee): Promise<Employee> {
        return this.employeesRepository.save(employee);
    }

    updateEmployee(id: number, data: any): Promise<any> {
        return this.employeesRepository
            .createQueryBuilder()
            .update()
            .set({
                ...data
            })
            .where('id = :id', { id })
            .execute()
    }

    async getSalaryInEuro(id: number): Promise<any> {
        const employee = await this.findOne(id);
        return { salary: `${employee.salary * 0.3} €` };
    }

    async getSalaryInDollar(id: number): Promise<any> {
        const employee = await this.findOne(id);
        return { salary: `${employee.salary * 0.31} $` };
    }
}
