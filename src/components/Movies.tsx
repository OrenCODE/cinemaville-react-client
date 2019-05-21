import React, {Component} from 'react';
import {MovieObject} from './Home';
import MovieItem from './MovieItem';

export interface IMovies {
    movies: MovieObject[]
    deleteMovie: (id: number) => void
}

class Movies extends Component <IMovies> {

    render() {

        const {movies, deleteMovie} = this.props;
        return (
            <div className={"card"}>
                <ul className={"list-group list-group-flush"}>
                    {movies.map((movie) => (
                        <MovieItem key={movie.id} movie={movie} deleteMovie={deleteMovie}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Movies;