import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';


@Controller('employees')
export class EmployeesController {

    constructor(private readonly employeesService: EmployeesService) { }

    @Get('/')
    getAllMovies() {
        return this.moviesService.getAllMovies();
    }

    @Post('/')
    requestAccountCreation(@Body() movie: MovieCreationDto) {
        return this.moviesService.addMovie(movie);
    }

    @Get('/:id')
    getMovie(@Param('id') movieId: number) {
        return this.moviesService.getMovieById(movieId);
    }

    @Put('/:id')
    updateMovie(@Param('id') movieId: number, @Body() updatedMovie: MovieEditDto) {
        return this.moviesService.editMovie(movieId, updatedMovie);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') movieId: number) {
        return this.moviesService.deleteMovie(movieId);
    }
}
