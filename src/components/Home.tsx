import React, {Component} from 'react';
import axios from 'axios';
import Movies from './Movies';
import MoviesNavbar from './MoviesNavbar';
import MovieModal from './MovieModal';
import EditMovieModal from './EditMovieModal';


export type MovieObject = Record<string, any>

export interface IHomeState {
    movies: MovieObject[]
    showAdd: boolean
    showEdit: boolean
}

class Home extends Component <any, IHomeState> {

    constructor(props: any) {
        super(props);

        this.state = {
            movies: [],
            showAdd: false,
            showEdit: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/movies/')
            .then(res => this.setState({
                movies: res.data
            }))
    }

    showModal = () => {
        this.setState({showAdd: true})
    };

    closeModal = () => {
        this.setState({showAdd: false})
    };

    showEditModal = () => {
        this.setState({showEdit: true})
    };

    closeEditModal = () => {
        this.setState({showEdit: false})
    };


    addMovie = (event: any) => {
        event.preventDefault();

        const title = event.target.elements.title.value;
        const genre = event.target.elements.genre.value;

        axios.post('http://localhost:4000/movies/', {
            title,
            genre
        })
            .then((res) => {
                const id = res.data.id;
                const newMovie = {
                    id,
                    title,
                    genre,
                };
                this.setState({movies: this.state.movies.concat(newMovie)})
            })
    };


    saveEditedMovie = (event: any) => {
        event.preventDefault();
    };

    searchMovie = (title: MovieObject) => {
        console.log(title);
        this.setState({
            movies: []
        });

        this.setState({
            movies: [title]
        })
    };

    showAllMovies = () => {
        this.setState({
            movies: []
        });

        axios.get('http://localhost:4000/movies/')
            .then(res => this.setState({
                movies: res.data
            }))
    };

    deleteMovie = (id: number) => {
        const {movies} = this.state;

        const moviesAfterDelete = movies.filter(movie => {
            return movie.id !== id;
        });

        axios.delete(`http://localhost:4000/movies/${id}`)
            .then(res => this.setState({
                movies: moviesAfterDelete
            }))
    };

    editMovie = (movie: MovieObject) => {
        console.log(movie);
        this.showEditModal()
    };

    render() {

        const {movies} = this.state;
        return (
            <div className="App">
                <MoviesNavbar searchMovie={this.searchMovie} showModal={this.showModal}
                              showAllMovies={this.showAllMovies}/>
                <Movies movies={movies} deleteMovie={this.deleteMovie} editMovie={this.editMovie}/>
                <MovieModal modalStatus={this.state.showAdd} closeModal={this.closeModal} modalSubmit={this.addMovie}/>
                <EditMovieModal modalStatus={this.state.showEdit} closeModal={this.closeEditModal}
                                modalSubmit={this.saveEditedMovie}/>
            </div>
        );
    }
}

export default Home;
