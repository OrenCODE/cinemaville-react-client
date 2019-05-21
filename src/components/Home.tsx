import React, {Component} from 'react';
import axios from 'axios';
import Movies from './Movies';
import MoviesNavbar from './MoviesNavbar';
import MovieModal from './MovieModal';


export type MovieObject = Record<string, any>

export interface IHomeState {
    movies: MovieObject[]
    show: boolean
}

class Home extends Component <any, IHomeState> {

    constructor(props: any) {
        super(props);

        this.state = {
            movies: [],
            show: false
        }
    }

    componentDidMount(): void {
        axios.get('http://localhost:4000/movies/')
            .then(res => this.setState({
                movies: res.data
            }))
    }

    showModal = () => {
        this.setState({show: true})
    };

    closeModal = () => {
        this.setState({show: false})
    };

    modalSubmit = (event: any) => {
        event.preventDefault();

        // const title = event.target.elements.title.value;
        // // const genre = event.target.elements.genre.value;
        //
        // axios.post('http://localhost:4000/movies/', {
        //     title,
        //     // genre
        // });
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

    render() {

        const {movies} = this.state;
        return (
            <div className="App">
                <MoviesNavbar showModal={this.showModal}/>
                <Movies movies={movies} deleteMovie={this.deleteMovie}/>
                <MovieModal modalStatus={this.state.show} closeModal={this.closeModal} modalSubmit={this.modalSubmit}/>
            </div>
        );
    }
}

export default Home;
