import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <div className='Curriculum'>
                        <Nav.Link href="#home" className='mx-5'>Curriculum Vitae</Nav.Link>
                    </div>
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/tuoprofilo">
                            <FaGithub className='icon mx-5' />
                        </Nav.Link>
                        <Nav.Link href="https://linkedin.com/in/tuoprofilo">
                            <FaLinkedin className='icon mx-5' />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;