import React, {Component} from 'react'
import {Button, Form, FormControl, Modal} from 'react-bootstrap';
import {MovieObject} from "./Home";

export interface IEditMovieModal {
    modalStatus: boolean
    closeModal: () => void
    saveEditedMovie: (event: any) => void
    preEditFields: MovieObject[]
}

class EditMovieModal extends Component <IEditMovieModal> {

    render() {
        const {modalStatus, closeModal, saveEditedMovie, preEditFields} = this.props;
        return (
            <Modal show={modalStatus} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Form onSubmit={saveEditedMovie}>
                    <Modal.Body>
                        {preEditFields.map((movieField) => (
                            <div key={movieField.id}>
                                <label htmlFor={"title"}>Title:</label>
                                <FormControl id={"title"} name={"title"} type={"text"} placeholder={movieField.title}
                                />
                                <label htmlFor={"genre"}>Genre:</label>
                                <FormControl id={"genre"} name={"genre"} type={"text"} placeholder={movieField.genre}
                                />
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