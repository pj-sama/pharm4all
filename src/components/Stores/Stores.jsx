import React, { useState} from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Stores.css'

function Stores() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
		<>
			<ListGroup>
				<Button variant="link" onClick={handleShow}>
					<ListGroupItem className='list-group-item-action'>
						Store Name
					</ListGroupItem>
      			</Button>
			</ListGroup>

			{/* Store Info Modal  */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title> <h4>Store Name</h4> </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>Mon-Fri</Col>
						<Col>09:00-20:00</Col>
					</Row>
					<Row>
						<Col>Sat</Col>
						<Col>09:00-18:00</Col>
					</Row>
					<Row>
						<Col>Sun (incl. Holidays) </Col>
						<Col>10:00-16:00</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<p class="text-center"><i class="fa-solid fa-phone"></i> 0111 111 111</p>
					<a href="/"><i class="fa-solid fa-location-dot"></i> View on map</a>
				</Modal.Footer>

			</Modal>
			
		</>
  )
}

export default Stores