import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar className="bg-transparent fixed-top scrolling-navbar">
            <Container className="container-md">
                <Navbar.Brand className="text-light" href="/">TISHA</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link text-light" to="/about">About</Link>
                        <Link className="nav-link text-light" to="/projects">Projects</Link>
                        <Link className="nav-link text-light" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;