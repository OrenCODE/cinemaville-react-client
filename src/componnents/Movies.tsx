import React, {Component} from 'react';
import {MovieObj} from "../App";
import MovieItem from './MovieItem';

export interface IMovies {
    movies: MovieObj[]
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