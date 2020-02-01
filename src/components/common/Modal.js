import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Button, Modal } from 'react-bootstrap'

import ListOfChannel from '../channel/ListOfChannel'

function Example(props) {
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
                <Modal.Body><ListOfChannel close={handleClose} channels={props.channels} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    return {
        channels: state.channel.channels
    }
}

export default connect(mapStateToProps)(Example)
