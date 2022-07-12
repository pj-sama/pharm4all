import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import '../../assets/css/components/Header.css'
const logo = require('../../assets/img/Pharm4All.png');

function Header() {
    return (
        <Navbar expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="" src={logo} height="50" className="d-inline-block align-top"/>
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
  )
}

export default Header