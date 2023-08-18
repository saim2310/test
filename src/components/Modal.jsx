import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CSS/modals.css'
function UserModal(props) {

    return (
        <div className="modalContainer">
            <Button className={`btn ${props.customClasses}`} onClick={() => props.handleShow(props.id)}>
                {typeof props.icon !== "undefined" ? props.icon : props.btnText}
            </Button>

            {
                props.modalItem == props.id &&
                <Modal
                    className='modal ModalN'
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={props.show}
                    onHide={props.handleClose}
                >

                    <Modal.Header closeButton className='MH'>
                        <h1 className='text-light'>{props.title}</h1>

                    </Modal.Header>

                    <Modal.Body className='MB'>
                        {props.children}

                    </Modal.Body>

                    <Modal.Footer>
                    </Modal.Footer>

                </Modal>
            }
        </div>


    );
}

export default UserModal