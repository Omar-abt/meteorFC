import React from "react";
import { ModalFooter } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import SignUpForm from "./SignupForm";

export default function SignupModal(props) {


    return (
        <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show} 
            onHide={props.handleClose}
            >
            <Modal.Header className="modal-header" closeButton>
                
            </Modal.Header>
            <Modal.Body className="signup-modal--body">
                <div className="container-fluid modal-container"> 
                    <h4 className="signup-modal--title">{props.leagueName} - Sign-Up</h4>

                    <SignUpForm show={props.show} handleClose={props.handleClose} confirmationShow={props.confirmationShow}/>
                    
                </div>
            </Modal.Body>
            <ModalFooter></ModalFooter>
        </Modal>
    );
}