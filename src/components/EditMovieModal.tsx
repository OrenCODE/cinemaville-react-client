import React, {Component} from 'react'
import {Button, Form, FormControl, Modal} from 'react-bootstrap';
import {MovieObject} from "./Home";

export interface IEditMovieModal {
    modalStatus: boolean
    closeModal: () => void
    modalSubmit: (event: any) => void
    preEditFields: MovieObject[]
}

class EditMovieModal extends Component <IEditMovieModal> {

    render() {
        const {modalStatus, closeModal, modalSubmit, preEditFields} = this.props;

        return (
            <Modal show={modalStatus} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Form onSubmit={modalSubmit}>
                    <Modal.Body>
                        {preEditFields.map((movieField) => (
                            <div key={movieField.id}>
                                <FormControl name={"title"} type={"text"} placeholder={"Movie title"}
                                             value={movieField.title}/>
                                <FormControl name={"genre"} type={"text"} placeholder={"Movie genre"}
                                             value={movieField.genre}/>
                            </div>
                        ))}
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