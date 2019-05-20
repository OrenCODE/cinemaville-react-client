import React, {Component} from 'react';
import SearchMovies from './componnents/SearchMovies'
import Movies from './componnents/Movies'
import MoviesNav from './componnents/MoviesNav'

import axios from 'axios';
// import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

export type MovieObj = Record<string, any>

interface IAppState {
    movies: MovieObj[]
}

class App extends Component <any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            movies: []
        }
    }

    searchMovie = (title: MovieObj) => {
        this.setState({
            movies: []
        });

        this.setState({
            movies: [title]
        })
    };


    showAll = (event: any) => {
        event.preventDefault();

        this.setState({
            movies: []
        });

        axios.get('http://localhost:4000/movies/')
            .then(res => {
                this.setState({movies: res.data})
            })
    };

    deleteMovie = (id: number) => {
        const {movies} = this.state;

        let moviesArray = movies.filter(movie => {
            return movie.id !== id;
        });

        axios.delete(`http://localhost:4000/movies/${id}`)
            .then(res => this.setState({
                movies: moviesArray
            }))
    };

    addNewMovie = () => {

    };

    render() {

        const {movies} = this.state;
        return (
            <div className="App">
                <MoviesNav/>
                <SearchMovies searchMovie={this.searchMovie} showAll={this.showAll}/>
                <Movies movies={movies} deleteMovie={this.deleteMovie}/>
            </div>
        );
    }
}

export default App;
