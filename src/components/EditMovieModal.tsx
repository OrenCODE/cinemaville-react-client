import React, {Component} from 'react'
import {Button, Form, FormControl ,Modal} from 'react-bootstrap';
import {IMovieModal} from "./MovieModal";

class EditMovieModal extends Component <IMovieModal> {

    render() {
        const {modalStatus, closeModal, modalSubmit} = this.props;

        return (
            <Modal show={modalStatus} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Form onSubmit={modalSubmit}>
                    <Modal.Body>
                        <FormControl name={"title"} type={"text"} placeholder={"Movie title"}/>
                        <FormControl name={"genre"} type={"text"} placeholder={"Movie genre"}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type={"submit"} variant="primary" onClick={closeModal}>
                            Edit movie and save changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )

    }
}

export default EditMovieModal