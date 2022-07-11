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
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end mx-auto" id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#action1">About Us</Nav.Link>
                        <Nav.Link href="#action2">Locations</Nav.Link>
                        <Nav.Link href="#action3">Availability Checker</Nav.Link>
                        <Nav.Link href="#action4">Med Info</Nav.Link>
                        <Nav.Link href="#action5">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
          </Container>
      </Navbar>
  )
}

export default Header