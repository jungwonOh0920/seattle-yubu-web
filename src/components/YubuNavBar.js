import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function YubuNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary flex justify-content-between">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={require('../assets/logo.png')}
                        width="160"
                        height="160"
                        className="d-inline-block align-top"
                        alt="Seattle Yubu logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#order">Order</Nav.Link>
                        <Nav.Link href="#order">Catering</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default YubuNavBar