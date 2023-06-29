import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


export default function FieldCardElem(props) {

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
                    <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
                </Modal.Header>
                <Modal.Body closeButton>
                    <div className="container-fluid modal-container">
                        <div className="row g-0">
                            <div className="col-8">
                                <div className="modal-img-container">
                                    <img src={require(`../images/${props.img}`)} className="modal-img" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row g-1 icons">
                                    <div className="col-3">
                                        <img src={require("../images/other/grass_icon.png")} className="grass-icon"/>
                                        <img src={require("../images/other/measurements_icon.png")} className="measurement-icon"/>
                                    </div>
                                    <div className="col-9">
                                        <h6 className="icon-desc">{props.surface}</h6>
                                        <h6 className="icon-desc">{props.dimensions}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h4 className="modal-title">{props.title}</h4>                    
                        <p className="modal-description">{props.description}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}