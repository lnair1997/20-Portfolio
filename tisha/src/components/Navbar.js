import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const textSize ={
    fontSize: '18px',
}


function NavigationBar() {
    return (
        <Navbar className="bg-transparent fixed-top scrolling-navbar">
            <Container className="container-md">
                <Navbar.Brand href="/" className="brand">T I S H A</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link style={textSize} className="nav-link" to="/about"><strong>ABOUT</strong></Link>
                        <Link style={textSize} className="nav-link" to="/projects"><strong>PROJECT</strong></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;