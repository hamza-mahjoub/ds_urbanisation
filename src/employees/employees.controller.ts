import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Employee } from './Employee.entity';
import { EmployeesService } from './employees.service';


@Controller('employees')
export class EmployeesController {

    constructor(private readonly employeesService: EmployeesService) { }

    @Get('/')
    async getAllEmployees() {
        return await this.employeesService.findAll();
    }

    @Get('/:id')
    async getEmployee(@Param('id') employeeId: number) {
        return await this.employeesService.findOne(employeeId);
    }

    @Delete('/:id')
    async deleteEmployee(@Param('id') employeeId: number) {
        return await this.employeesService.removeEmployee(employeeId);
    }

    @Post()
    async createEmployee(@Res() response, @Body() employee: Employee) {
        const newEmployee = await this.employeesService.createEmployee(employee);
        return response.status(200).json({
            newEmployee
        })
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatedEmployee: any) {
        const newEmployee: Employee = await this.employeesService.updateEmployee(id, updatedEmployee)
        return newEmployee;
    }

    // endpoints for currency conversion
    

}
