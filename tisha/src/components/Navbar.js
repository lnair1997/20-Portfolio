import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar className="bg-transparent fixed-top scrolling-navbar">
            <Container className="container-md">
                <Navbar.Brand className="" href="/"><strong>TISHA</strong></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/about"><strong>About</strong></Link>
                        <Link className="nav-link" to="/projects"><strong>Projects</strong></Link>
                        <Link className="nav-link" to="/contact"><strong>Contact</strong></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;