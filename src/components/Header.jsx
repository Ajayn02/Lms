import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="py-3" style={{ backgroundColor: "#F7F4F3" }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: "25px" }}>
                        <i className="fa-solid me-2 fa-user-graduate" />
                        {' '}
                        <span className='fw-bold'>Edu-Connect</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header