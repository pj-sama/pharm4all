import React, { useState} from 'react'
import { Button, CloseButton, ListGroup, ListGroupItem, Modal, ModalDialog, ModalHeader } from 'react-bootstrap'

function Stores() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
          <div class="list-group">
              <a href="#exampleModal" class="list-group-item list-group-item-action" id="store" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Store Name
              </a>
              <a href="#" class="list-group-item list-group-item-action" id="store" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Store Name
              </a>
              <a href="#" class="list-group-item list-group-item-action" id="store" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Store Name
              </a>
              <a href="#" class="list-group-item list-group-item-action" id="store" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Store Name
              </a>
              <a href="#" class="list-group-item list-group-item-action" id="store" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Store Name
              </a>
          </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Branch Name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                              aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-between">
                            <p> Mon-Fri</p>
                            <p> 09:00-18:00</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p> Sat</p>
                            <p> 09:00-18:00</p>
                        </div>
                            <div class="d-flex justify-content-between">
                                <p> Sun (inc. Holidays)</p>
                                <p> 09:00-18:00</p>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-around">
                            <p class="text-center">
                                <i class="fa-solid fa-phone"></i>
                                0111 111 111
                            </p>

                            <a href="#"><i class="fa-solid fa-location-dot"></i> View on map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Stores