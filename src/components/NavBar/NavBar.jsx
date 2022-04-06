import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../img/logo2.jpeg'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Container fluid>
                <Navbar.Brand>
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
                        style={{ maxHeight: '100px' }, {zIndex:1000}}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
                        <NavDropdown title="Productos" className="nav-item" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/category/Interior">Plantas Interior</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Exterior">Plantas Exterior</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Fertilizantes">Fertilizantes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Agroquimicos">Agroquímicos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Sustratos">Sustratos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/Cesped">Césped</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/regala" className="nav-item">Regalá</Nav.Link>
                      
                    </Nav>
                    <Navbar.Brand>
                    <CartWidget />
                    </Navbar.Brand>
                   
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;