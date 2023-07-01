import React from "react";
import { ModalFooter } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


export default function LeagueCardElem(props) {

    const [show, setShow] = React.useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Card style={{ width: '20rem' }} className="league_card">
                <a onClick={handleShow} className="modal-link">
                    <Card.Img variant="top" src={require(`../images/${props.img}`)} className="league_card--image" />            
                    <Card.Body className="league_card--body">
                    <Card.Title className="league_card--title">{props.title}</Card.Title>
                    </Card.Body>
                </a>
            </Card>

      
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleClose}
                >
                <Modal.Header className="modal-header" closeButton>
                    
                </Modal.Header>
                <Modal.Body className="league-modal--body">
                    <div className="container-fluid modal-container"> 
                        <h4 className="league-modal--title">{props.title}</h4>
                        <p className="league-modal--description">{props.description}</p>
                        <img src={require(`../images/${props.img}`)} className="league-modal--img" />
                    </div>
                </Modal.Body>
                <ModalFooter className="">
                <Button variant="warning" className="sign-up-button">
                    Sign Up
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}