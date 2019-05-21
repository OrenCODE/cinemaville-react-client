import React, {Component} from 'react';
// import {MovieObj} from "../App";
import axios from 'axios';

export interface ISearchMovies {
    showAll: (event: any) => void
    searchMovie: (title: MovieObj) => void
    // addNewMovie: (newMovie: MovieObj) => void
}

class SearchMovies extends Component <ISearchMovies> {

    state = {
        title: ''
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event: any) => {
        const {searchMovie} = this.props;

        event.preventDefault();
        const searchText = event.target.elements.title.value;

        if(!searchText) {
            return alert('please enter movie name');
        }

        axios.get(`http://localhost:4000/movies/search/${searchText}`)
            .then(res => searchMovie(res.data)) // IMPORTANT LINE//
            .catch(function (error) {
                return alert(`this movie doesn't exist, feel free to add it`)
            });

        this.setState({
            title: ''
        })
    };

    render() {

        const {showAll} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name={"title"} type={"text"} placeholder={"search for a movie"} onChange={this.handleChange}
                       value={this.state.title}/>
                <button type={"submit"}>Search</button>
                <button onClick={showAll}>Show All Movies</button>
            </form>
        );
    }
}

export default SearchMovies;