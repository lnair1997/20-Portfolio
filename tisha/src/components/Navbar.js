import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavigationBar() {
    return (
        <Navbar className="bg-transparent fixed-top scrolling-navbar">
            <Container className="container-md">
                <Navbar.Brand href="/" className="brand">T I S H A</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link text-dark" to="/about"><strong>ABOUT</strong></Link>
                        <Link className="nav-link text-dark" to="/projects"><strong>PROJECT</strong></Link>
                        <Link className="nav-link text-dark" to="/contact"><strong>CONTACT</strong></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;