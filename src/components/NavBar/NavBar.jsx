import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../img/logo2.jpeg'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Container fluid>
                <Navbar.Brand 
                    href="/">
                        <img 
                            className="logo-style"
                            src={logo} 
                            alt="imagen del logo del vivero memé" 
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 container"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                        <NavDropdown title="Productos" className="nav-item" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/category/Interior">Plantas Interior</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Exterior">Plantas Exterior</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Fertilizantes">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Agroquimicos">Agroquímicos</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Sustratos">Sustratos</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Cesped">Césped</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/regala" className="nav-item">Regalá</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="que deseas buscar..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscador</Button>
                        <CartWidget />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;