import React, {Component} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';
import axios from "axios";


class MovieModal extends Component {

    state = {
      show: false
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
    };


    render() {
        return(
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
        )

    }
}

export default MovieModal