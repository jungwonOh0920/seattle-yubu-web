import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function YubuNavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-transparent flex justify-content-between z-1"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={require("../assets/logo.png")}
            width="160"
            height="160"
            className="d-inline-block align-top"
            alt="Seattle Yubu logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-0 shadow-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#menu" className="text-light">
              Menu
            </Nav.Link>
            <Nav.Link href="#order" className="text-light">
              Order
            </Nav.Link>
            <Nav.Link href="#order" className="text-light">
              Catering
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default YubuNavBar;
