import React, {Component} from 'react';
import {MovieObject} from "./Home";

export interface IMovieItem {
    movie: MovieObject
    deleteMovie: (id: number) => void
    editMovie: (arg: MovieObject) => void
}

class MovieItem extends Component <IMovieItem> {

    render() {

        const {movie, deleteMovie, editMovie} = this.props;

        return (
            <div key={movie.id} className={"list-group-item"}>
                <div>{movie.title}</div>
                <div>{movie.genre}</div>
                <button onClick={() => deleteMovie(movie.id)}>del</button>
                <button onClick={() => editMovie(movie)}>Edit</button>
            </div>
        );
    }
}

export default MovieItem;