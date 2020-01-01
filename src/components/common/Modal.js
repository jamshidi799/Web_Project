import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import ListOfChannel from '../channel/ListOfChannel'

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" onClick={handleShow}>
                Channels
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Channels</Modal.Title>
                </Modal.Header>
                <Modal.Body><ListOfChannel close={handleClose} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
