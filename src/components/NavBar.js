import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Logo from './Logo';
import '../NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className='custom-navbar' data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white nav-link'>Home</Nav.Link>
                        <Nav.Link href="#features" className='text-white nav-link'>Indumentaria</Nav.Link>
                    </Nav>
                    <nav className='ml-auto'>{}
                    <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
                    </nav>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavBar