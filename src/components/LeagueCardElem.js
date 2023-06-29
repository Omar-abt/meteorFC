import React from "react";
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
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleClose}
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    This is a league card
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}