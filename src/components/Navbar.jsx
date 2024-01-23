import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Container>
                    <div className='Curriculum'>
                        <Nav.Link href={'https://drive.google.com/file/d/1LRDNwC8bau8aZJFp-zd3iF8zH-PdwOzY/view?usp=sharing'} className='mx-2 mx-md-5'>Curriculum Vitae</Nav.Link>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="https://github.com/alessiofranchini">
                                <FaGithub className='icon mx-2 mx-md-5' />
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/alessio-franchini-74abb6272/">
                                <FaLinkedin className='icon mx-2 mx-md-5' />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
