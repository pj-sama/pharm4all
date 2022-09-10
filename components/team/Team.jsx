/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { CardImg } from 'react-bootstrap'


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import Image from 'next/image'

function Team() {
  return (
    <section id = "our_team" >
        <Container fluid="md" className="py-5">
            <h2 className="display-5 text-center">Meet The Team</h2>

            <Row>
                <div className="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <Card.Img src='images/team/seagraab.jpg' className="card-img-top"
                        layout='fill' alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">B. Seagraab</h5>
                                <h6 className="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <Link href="/" className="card-link"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
                    </Card>
                </div>

                <div className="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <Card.Img src='/images/team/andrews.jpg' class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">J. Andrews</h5>
                                <h6 className="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <Link href="/" className="card-link"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
                    </Card>
                </div>

                <div className="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <Card.Img src='/images/team/delarosa.jpg' class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">M. Delarosa</h5>
                                <h6 className="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <Link href="/" className="card-link"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
                    </Card>
                </div>
                <div className="col-12 col-md-3 p-2 ">
                    <Card class="card" id="team_member">
                          <Card.Img src='/images/team/petrova.jpg' class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">M. Petrova</h5>
                                <h6 className="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <Link href="#action" className="card-link"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
                    </Card>
                </div>

            </Row>
        </Container>
        </section >
  )
}

export default Team