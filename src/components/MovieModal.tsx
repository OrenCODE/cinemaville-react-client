import React, {Component} from 'react'
import {Button, Form, FormControl ,Modal} from 'react-bootstrap';

export interface IMovieModal {
    modalStatus: boolean
    closeModal: () => void
    addMovie: (event: any) => void
}

class MovieModal extends Component <IMovieModal> {

    render() {

        const {modalStatus, closeModal, addMovie} = this.props;
        return (
            <Modal show={modalStatus} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Form onSubmit={addMovie}>
                    <Modal.Body>
                        <FormControl name={"title"} type={"text"} placeholder={"Title"}/>
                        <FormControl name={"genre"} type={"text"} placeholder={"Genre"}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type={"submit"} variant="primary" onClick={closeModal}>
                            Add Movie
                        </Button>
                        <Button variant="primary" onClick={closeModal}>
                            Close and Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )

    }
}

export default MovieModal