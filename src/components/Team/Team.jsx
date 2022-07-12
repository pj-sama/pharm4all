import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { CardImg } from 'react-bootstrap'

import Seagraab from "../../assets/img/team/pexels-antoni-shkraba-5215024.jpg"
import Andrews from "../../assets/img/team/pexels-pavel-danilyuk-5998474.jpg"
import Delarosa from "../../assets/img/team/pexels-antoni-shkraba-6749777.jpg"
import Petrova from "../../assets/img/team/pexels-thirdman-5327580.jpg"

import '../../assets/css/components/Team.css'

function Team() {
  return (
    <section id = "our_team" >
        <Container fluid="md" className="py-5">
            <h2 class="display-5 text-center">Meet The Team</h2>

            <Row>
                <div class="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <CardImg src={Seagraab} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">B. Seagraab</h5>
                                <h6 class="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <a href="/" class="card-link"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                            </div>
                    </Card>
                </div>

                <div class="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <CardImg src={Andrews} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">J. Andrews</h5>
                                <h6 class="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <a href="/" class="card-link"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                            </div>
                    </Card>
                </div>

                <div class="col-12 col-md-3 p-2 ">
                    <Card className="card" id="team_member">
                        <CardImg src={Delarosa} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">M. Delarosa</h5>
                                <h6 class="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <a href="/" class="card-link"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                            </div>
                    </Card>
                </div>
                <div class="col-12 col-md-3 p-2 ">
                    <Card class="card" id="team_member">
                          <CardImg src={Petrova} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title text-center">M. Petrova</h5>
                                <h6 class="card-subtitle text-center mb-2 text-muted">Pharmacist</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <a href="#action" class="card-link"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                            </div>
                    </Card>
                </div>

            </Row>
        </Container>
        </section >
  )
}

export default Team