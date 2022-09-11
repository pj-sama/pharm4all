import React from 'react'
import { useState } from 'react'
// Next Imports
import Link from 'next/link'

// React Bootstrap imports
import { ListGroup ,  Button , ListGroupItem , Modal , Col , Row} from 'react-bootstrap'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styles
import styles from '../../styles/Stores.module.css'

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
					<p className="text-center"><i className="fa-solid fa-phone"></i> 0111 111 111</p>
					<Link href="/">
                        <p>
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" /> View on map
                        </p>
                    </Link>
				</Modal.Footer>

			</Modal>
        </>
    )
}

export default Stores