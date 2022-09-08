import React from "react";
import { Container , Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import styles from './Header.module.css';

import Image from "next/image";

 
function Header() {
    return (
        <>
            <Navbar expand="md" variant="dark" className={styles.navbar}>
                <Container>
                    <Navbar.Brand href="/">
                        {/* <img alt="" src={logo} height="50" className="d-inline-block align-top"/> */}
                        <Image
                            alt="Pharm4All Logo"
                            src="/images/logo.png"
                            layout="fixed"
                            width={223}
                            height={50}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end mx-auto" id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/About">About Us</Nav.Link>
                            <Nav.Link href="/Locations">Locations</Nav.Link>
                            <Nav.Link href="/AvailabilityChecker">Availability Checker</Nav.Link>
                            <Nav.Link href="/MedInfo">Med Info</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </>
    )
}
 
 export default Header;