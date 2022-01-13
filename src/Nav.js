import React from "react";
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NAV() {

    return (
        <Navbar bg="dark" variant="dark" style={{}}>
        <Container >
          <Navbar.Brand >Blog</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/!#" className="Links">Home</Link>
          <Link to="/Users" className="Links">Users</Link>
          <Link to="/Authors" className="Links">Authors</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NAV;