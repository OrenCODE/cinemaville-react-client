import React from 'react';
// import MovieModal from './MovieModal';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import {Link, NavLink, withRouter} from 'react-router-dom'

// export interface IMoviesNavbar {
//     handleShow: (event: any) => void
// }

const MoviesNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand>CinemaVille</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <Nav.Link exact to="/">Movies</Nav.Link>
            <Button>Add New Movie</Button>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
);

export default withRouter(MoviesNavbar)
