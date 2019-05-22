import React, {Component} from 'react';
import {MovieObject} from './Home';
import MovieItem from './MovieItem';

export interface IMovies {
    movies: MovieObject[]
    deleteMovie: (id: number) => void
    editMovie: (id: number) => void
}

class Movies extends Component <IMovies> {

    render() {

        const {movies, deleteMovie, editMovie} = this.props;
        return (
            <div className={"container movies"}>
                <div className={"card"}>
                    <ul className={"list-group list-group-flush"}>
                        {movies.map((movie) => (
                            <MovieItem key={movie.id} movie={movie} deleteMovie={deleteMovie} editMovie={editMovie}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Movies;