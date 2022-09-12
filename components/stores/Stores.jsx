import React from 'react'
import { useState } from 'react'
// Next Imports
import Link from 'next/link'

// React Bootstrap imports
import { ListGroup ,  Button , ListGroupItem , Modal , Col , Row} from 'react-bootstrap'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone } from '@fortawesome/free-solid-svg-icons'

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
					<Modal.Title  className={styles.modaltitle}> <h4>Store Name</h4> </Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.modalbody}>
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
				<Modal.Footer className={styles.modalfooter}>
					<Link href="/">
                        <p> <FontAwesomeIcon icon={faPhone} /> Call this store </p>
                    </Link>
					<Link href="/">
                        <p><FontAwesomeIcon icon={faLocationDot} /> View on map</p>
                    </Link>
				</Modal.Footer>

			</Modal>
        </>
    )
}

export default Stores