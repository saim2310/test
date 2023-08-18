import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CSS/modals.css'
function UserModalDelete(props) {

    return (
        <div className="modalContainer">
            <Button className={`btn ${props.customClasses}`} onClick={() => props.handleShowDelete(props.id)}>
                {typeof props.icon !== "undefined" ? props.icon : props.btnText}
            </Button>
            {
                props.modalItem == props.id &&
                <Modal
                    className='modal ModalD'
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={props.showDelete}
                    onHide={props.handleCloseDelete}
                >

                    <Modal.Header closeButton className='MHD'>
                        <h1>{props.title}</h1>
                    </Modal.Header>

                    <Modal.Body className='MBD'>
                        {props.children}

                    </Modal.Body>

                    <Modal.Footer>
                    </Modal.Footer>

                </Modal>
            }
        </div>


    );
}

export default UserModalDelete