import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav  from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <Container>
          <footer class="py-3 my-4 text-muted">
            <Nav className="justify-content-center border-bottom pb-3 mb-3">
                <NavItem><NavLink><a href="about.html" class="nav-link px-2 text-muted">About Us</a></NavLink></NavItem>
                <NavItem><NavLink><a href="/" class="nav-link px-2 text-muted">Locations</a></NavLink></NavItem>
                <NavItem><NavLink><a href="/" class="nav-link px-2 text-muted">Availability Checker</a></NavLink></NavItem>
                <NavItem><NavLink><a href="/" class="nav-link px-2 text-muted">Med Info</a></NavLink></NavItem>
                <NavItem><NavLink><a href="/" class="nav-link px-2 text-muted">Login</a></NavLink></NavItem>
            </Nav>
              <div class="d-flex justify-content-between">
                  <span class="text-center text-muted">© 2022 Pharm4All</span>
                  <ul class="nav list-unstyled d-flex">
                      <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                      </li>
                      <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                      </li>
                      <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                      </li>
                  </ul>
              </div>
        </footer>
    </Container>
  )
}

export default Footer