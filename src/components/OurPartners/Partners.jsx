import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../assets/css/components/Partners.css'
import Johnson_and_johnson from '../../assets/img/partners/Johnson_and_Johnson_logo.png'
import Pfizer from '../../assets/img/partners/Pfizer-logo.png'
import Astrazeneca from '../../assets/img/partners/astrazeneca-logo-big.png'
import Biogen from '../../assets/img/partners/Biogen_logo.png'
import Stryker from '../../assets/img/partners/stryker_logo.png'
import Cipla from '../../assets/img/partners/cipla_logo.png'

function Partners() {
    return (
        <Container fluid="md" className="py-5 d-flex flex-column align-items-center justify-content-center text-center" id = "our_partners">
            <h2 class="display-5">Our Partners</h2>
            <Row className='my-4'>
                <Col md={4}>
                    <a href="/"><img src={Johnson_and_johnson} class="img-fluid" alt="Johnson and Johnson logo"/></a>
                </Col>
                <Col md={4}>
                    <a href="/"><img src={Pfizer} class="img-fluid" alt="Pfizer logo"/></a>
                </Col>
                <Col md={4}>
                    <a href="/"><img src={Astrazeneca} class="img-fluid" alt="Pfizer-logo logo"/></a>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <a href="/"><img src={Biogen} class="img-fluid" alt="Biogen logo" /></a>
                </Col>
                <Col md={4}>
                    <a href="/"><img src={Stryker} class="img-fluid" alt="Stryker logo" /></a>
                </Col>
                <Col md={4}>
                    <a href="/"><img src={Cipla} class="img-fluid" alt="Cipla logo" /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Partners