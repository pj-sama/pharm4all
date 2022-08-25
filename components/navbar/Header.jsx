import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import './Header.module.css';

 
function Header() {
    return (
        <>
            <Navbar expand="md" variant="dark" id="nav-bar">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Container>
            </Navbar>
        </>
    )
}
 
 export default Header;