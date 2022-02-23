import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../img/logo2.jpeg'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Container fluid>
                <Navbar.Brand 
                    href="#">
                        <img 
                            src={logo} 
                            alt="imagen del logo del vivero memé" 
                            width="290px"
                            height="60px"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 container"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="nav-item">Home</Nav.Link>
                        <NavDropdown title="Productos" className="nav-item" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Plantas Interior</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Plantas Exterior</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Césped</NavDropdown.Item>                            <NavDropdown.Item href="#action5">Cesped</NavDropdown.Item>
                            <NavDropdown.Item href="#action6">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">Agroquímicos</NavDropdown.Item>
                            <NavDropdown.Item href="#action8">Fertilizantes</NavDropdown.Item>                            <NavDropdown.Item href="#action6">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Item href="#action9">Sustratos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className="nav-item">Regalá</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="que deseas buscar..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscador</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;