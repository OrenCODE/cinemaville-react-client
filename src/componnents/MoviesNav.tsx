import React, {Component} from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom'

import {Modal} from 'react-bootstrap';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';

// type postObj = Record<string,any>

export interface IMoviesNavState {
    show: boolean
    // postArr: []
}

class MoviesNav extends Component <any, IMoviesNavState> {

    state = {
        show: false,
        // postArr: []
    };

    handleShow = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleSubmit = (event: any) => {
        event.preventDefault();

        const title = event.target.elements.title.value;
        // const genre = event.target.elements.genre.value;

        axios.post('http://localhost:4000/movies/', {
            title,
            // genre
        });

        // const newMovie = {
        //     title: title
        // }
        //
        // this.setState({postArr: this.state.postArr.concat(newMovie)})

    };


    render() {

        return (

            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">CinemaVille</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Movies</Nav.Link>
                        <Button onClick={this.handleShow}>Add New Movie</Button>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br/>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <input name={"title"} type={"text"} placeholder={"Movie title"}/>
                            <input name={"genre"} type={"text"} placeholder={"Movie genre"}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type={"submit"} variant="primary" onClick={this.handleClose}>
                                Add Movie
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Close and Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

            </div>
        )
    }
}

export default MoviesNav;