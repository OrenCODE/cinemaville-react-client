import React, {Component} from 'react';
import {MovieObj} from "../App";

export interface IMovieItem {
    movie: MovieObj
    deleteMovie: (id: number) => void
}

class MovieItem extends Component <IMovieItem> {

    render() {

        const {movie,deleteMovie} = this.props;

        return (
           <div key={movie.id} className={"list-group-item"}>
               <div>{movie.title}</div>
               <button onClick={() => deleteMovie(movie.id)}>del</button>
           </div>
        );
    }
}

export default MovieItem;