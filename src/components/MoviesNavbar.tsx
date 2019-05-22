import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {MovieObject} from "./Home";

export interface IMoviesNavbar {
    showAllMovies: (event: any) => void
    showModal: () => void
    searchMovie: (title: MovieObject) => void
}

class MoviesNavbar extends Component <IMoviesNavbar> {

    state = {
        searchText: ''
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event: any) => {
        event.preventDefault();

        const {searchMovie} = this.props;
        const searchText = event.target.elements.searchText.value;

        if (!searchText) {
            return alert('please enter movie name');
        }

        axios.get(`http://localhost:4000/movies/search/${searchText}`)
            .then(res => searchMovie(res.data)) // IMPORTANT LINE//
            .catch(function (error) {
                return alert(`this movie doesn't exist, feel free to add it`)
            });

        this.setState({
            searchText: ''
        })
    };


    render() {

        const {showAllMovies, showModal} = this.props;
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>CinemaVille</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link to="/" className={"nav-link"} onClick={showAllMovies}>Movies</Nav.Link>
                        <Nav.Link to="/" className={"nav-link"} onClick={showModal}>Add New Movie</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl name={"searchText"} type="text" onChange={this.handleChange} placeholder="Search"
                                     className="mr-sm-2"
                                     value={this.state.searchText}/>
                        <Button type={"submit"} variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MoviesNavbar

