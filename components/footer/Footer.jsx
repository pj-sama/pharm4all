import React from 'react'

import Link from 'next/link';
// React-boostrap components
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <Container> 
                <footer>
                    <Nav className="justify-content-center border-bottom pb-3 mb-3">
                        <NavItem>
                            <Nav.Link href='/about' className="m-2 text-muted">About Us</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href='/locations' className='m-2 text-muted'>Locations</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href='/availabilitychecker' className='m-2 text-muted'>Availability Checker</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href='/medinfo' className='m-2 text-muted'>Locations</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href='/login' className='m-2 text-muted'>Login</Nav.Link>
                        </NavItem>
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
        </>
    )
}

export default Footer