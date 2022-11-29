import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Employee } from './Employee.entity';
import { EmployeesService } from './employees.service';


@Controller('employees')
export class EmployeesController {

    constructor(private readonly employeesService: EmployeesService) { }

    @Get('/')
    async getAllMovies() {        
        return await this.employeesService.findAll();
    }

    @Get('/:id')
    async getEmployee(@Param('id') employeeId: number) {
        return await this.employeesService.findOne(employeeId);
    }

    @Delete('/:id')
    async deleteEmployee(@Param('id') employeeId: number) {
        return await this.employeesService.remove(employeeId);
    }

    @Post()
    async createBook(@Res() response, @Body() employee: Employee) {
        const newEmployee = await this.employeesService.createBook(employee);
        return response.status(200).json({
            newEmployee
        })
    }

    // @Post('/')
    // requestAccountCreation(@Body() movie: MovieCreationDto) {
    //     return this.employeesService.addMovie(movie);
    // }

    // @Put('/:id')
    // updateMovie(@Param('id') movieId: number, @Body() updatedMovie: MovieEditDto) {
    //     return this.employeesService.editMovie(movieId, updatedMovie);
    // }


}
