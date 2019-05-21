import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'

class MoviesNavbar extends Component <any>{

    render() {
        const {showModal} = this.props;
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Link to="/"><Navbar.Brand>CinemaVille</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <NavLink exact to="/" className={"nav-link"}>Movies</NavLink>
                        <NavLink to="/" className={"nav-link"} onClick={showModal}>Add New Movie</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MoviesNavbar

