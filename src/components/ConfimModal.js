import React from "react";
import { ModalFooter } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal(props) {
    return (
        <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show} 
            onHide={props.handleClose}
            >
            <Modal.Header className="modal-header" closeButton></Modal.Header>
            <Modal.Body className="signup-modal--body">
                <div className="container-fluid modal-container-confirmation"> 
                    <h4 className="signup-modal--title">Sign-Up Successful!</h4>
                    <img src={require("../images/other/confirmation.png")} alt="Confirmation icon" className="confirmation-icon" />
                    <p className="confirmation-modal-text">Thank you for signing up. You will hear from us very soon.</p>
                    <p className="confirmation-modal-text">We hope to see you play for Meteor FC!</p>
   
                </div>
            </Modal.Body>
            <ModalFooter></ModalFooter>
        </Modal>
    );
}