import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// FontAwesomeIcons  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <Container fluid="md" id='services' className='py-5 d-flex flex-column align-items-center justify-content-center text-center'>
		  <Row className='my-5'>
				<Col md={4}>
					<h2><FontAwesomeIcon icon={faCalendarCheck} id="services-icon" /> Availability Checker</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
				<Col md={4}>
					<h2><FontAwesomeIcon icon={faMapMarkedAlt} id="services-icon" /> Our Locations</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
				<Col md={4}>
					<h2><FontAwesomeIcon icon={faTruck} id="services-icon" /> Order Online</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
			</Row>
			<Row>
				<Col md={4}>
						<h2><FontAwesomeIcon icon={faCapsules} id="services-icon" /> Meds Info</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
				<Col md={4}>
						<h2><FontAwesomeIcon icon={faPrescriptionBottleMedical} id="services-icon" /> Prescription+</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
				<Col md={4}>
						<h2><FontAwesomeIcon icon={faRepeat} id="services-icon" /> Repeat-Easy</h2>
					<p className="m-3 fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed
					  iusto obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex
					  nostrum officia alias quae. Ipsam, maiores.
					</p>
				</Col>
			</Row>
		</Container>
    )
}

export default Services