import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
    return (
    <div>
        <Navbar className='custom-navbar' data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" className='text-white nav-link'>Home</Nav.Link>
                <Nav.Link as={Link} to="/catalogo" className='text-white nav-link'>Catálogo</Nav.Link>
            </Nav>
            <nav className='ml-auto'>
            <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
            </nav>
        </Container>
        </Navbar>
    </div>
    );
}

export default NavBar;