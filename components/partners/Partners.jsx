import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container, Row , Col } from 'react-bootstrap'

// Stylesheet
import styles from '../../styles/Partners.module.css'

// Image imports
import Astrazeneca from '/public/images/partners/astrazeneca.png'
import Biogen from '/public/images/partners/biogen.png'
import Cipla from '/public/images/partners/cipla.png'
import Johnson_and_johnson from '/public/images/partners/johnson_and_johnson.png'
import Pfizer from '/public/images/partners/pfizer.png'
import Stryker from '/public/images/partners/stryker.png'


function Partners() {
    return (
        <Container fluid="md" className="py-5 d-flex flex-column align-items-center justify-content-center text-center" id= {styles.partners}>
            <h2 className="display-5">Our Partners</h2>
            <Row className='my-4'>
                <Col md={4}>
                    <Link href="/">
                        <Image 
                            src={Johnson_and_johnson}
                            className="img-fluid"
                            alt="Johnson and Johnson logo"
                            id={styles.partnersimg}
                            />
                    </Link>
                </Col>
                <Col md={4}>
                    <Link href="/">
                        <Image
                            src={Pfizer}
                            className="img-fluid" 
                            alt="Pfizer logo"
                            id={styles.partnersimg}
                        />
                    </Link>
                </Col>
                <Col md={4}>
                    <Link href="/">
                        <Image 
                            src={Astrazeneca} 
                            className="img-fluid" 
                            alt="Pfizer-logo logo"
                            id={styles.partnersimg}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Link href="/">
                        <Image 
                            src={Biogen} 
                            className="img-fluid" 
                            alt="Biogen logo" 
                            id={styles.partnersimg}
                            />
                    </Link>
                </Col>
                <Col md={4}>
                    <Link href="/">
                        <Image 
                            src={Stryker} 
                            className="img-fluid" 
                            alt="Stryker logo" 
                            id={styles.partnersimg}
                            />
                    </Link>
                </Col>
                <Col md={4}>
                    <Link href="/">
                        <Image 
                            src={Cipla} 
                            className="img-fluid" 
                            alt="Cipla logo" 
                            id={styles.partnersimg}
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Partners