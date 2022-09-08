import React from 'react'

import Link from 'next/link';
// React-boostrap components
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <Container> 
                <footer className='text-muted'>
                    <Nav className="justify-content-center border-bottom pb-3 mb-3">
                        <NavItem><NavLink><a href="/About" className="nav-link px-2 text-muted">About Us</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="/Locations" className="nav-link px-2 text-muted">Locations</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="/AvailabilityChecker" className="nav-link px-2 text-muted">Availability Checker</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="/MedInfo" className="nav-link px-2 text-muted">Med Info</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="/Login" className="nav-link px-2 text-muted">Login</a></NavLink></NavItem>
                    </Nav>
                    <div className="d-flex justify-content-between">
                        <span className="text-center text-muted">© 2022 Pharm4All</span>
                        <ul className="nav list-unstyled d-flex">
                            <li className="ms-3"><Link className="text-muted" href="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                            <li className="ms-3"><Link className="text-muted" href="/"><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                            <li className="ms-3"><Link className="text-muted" href="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </Container>
            <div>Footer</div>
        </>
    )
}

export default Footer