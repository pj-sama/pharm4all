import React, { useState } from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';

const stores = [
	{
		name: 'Store A',
		location: 'Location A',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisi vel purus ultricies molestie id id quam. Integer in urna nec sapien malesuada pharetra.',
	},
	{
		name: 'Store B',
		location: 'Location B',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisi vel purus ultricies molestie id id quam. Integer in urna nec sapien malesuada pharetra.',
	},
	{
		name: 'Store C',
		location: 'Location C',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisi vel purus ultricies molestie id id quam. Integer in urna nec sapien malesuada pharetra.',
	},
];

const StoreList = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const handleShowModal = (store) => {
		setModalData(store);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<ListGroup>
				{stores.map((store) => (
					<ListGroup.Item key={store.name}>
						<div className='d-flex justify-content-between align-items-center'>
							<div>
								<h5>{store.name}</h5>
								<p>{store.location}</p>
							</div>
							<Button onClick={() => handleShowModal(store)}>
								View More Info
							</Button>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>

			<Modal
				show={showModal}
				onHide={handleCloseModal}
			>
				<Modal.Header closeButton>
					<Modal.Title>{modalData && modalData.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalData && modalData.info}</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleCloseModal}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default StoreList;
