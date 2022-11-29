import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {

    index = 3;
    movies: Movie[] = [
        {
            id: 1,
            name: 'mission impossible',
            type: 'action',
            rating: 10,
        },
        {
            id: 2,
            name: 'Jumanji',
            type: 'adventure',
            rating: 9,
        },
    ];

    addMovie(movie): Movie[] {
        this.movies = this.movies.concat({ id: this.index, ...movie });
        this.index = this.index++;
        return this.movies;
    }

    getAllMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie {
        return this.movies.filter((m) => m.id == id)[0];
    }

    editMovie(id: number, newMovie): Movie[] {
        this.movies = this.movies.map((m) =>
            m.id == id ? { ...this.getMovieById(id), ...newMovie } : m,
        );
        return this.movies;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter((m) => m.id != id);
        return id;
    }

}
