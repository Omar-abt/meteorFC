import React from "react";
import { ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


export default function LeagueCardElem(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/search");
        window.scroll(0, 0);
    }


    return (
        <div>
            <Card style={{ width: '20rem' }} className="league_card">
                <a onClick={handleShow} className="modal-link">
                    <Card.Img variant="top" src={require(`../images/${props.img}`)} alt="League card picture" className="league_card--image" />            
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
                        <div className="row g-1 league-modal--row">
                            <div className="col-8">
                                <img src={require(`../images/${props.img}`)} alt="League picture" className="league-modal--img" />
                            </div>
                            <div className="col-4">
                                <div className="row g-0 icons">
                                    <div className="col-3">
                                        <img src={require("../images/other/age_icon.png")} className="age-icon" />
                                        <img src={require("../images/other/skill_level_icon.png")} className="skill-level-icon"/>
                                        <img src={require("../images/other/field_icon.png")} className="field-icon"/>
                                    </div>
                                    <div className="col-9">
                                        <h6 className="league-icon-desc">{props.ageRange}</h6>
                                        <h6 className="league-icon-desc">{props.skillLevel}</h6>
                                        <h6 className="league-icon-desc">{props.fields}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Modal.Body>
                <ModalFooter className="">
                <Button variant="warning" className="sign-up-button" onClick={handleClick}>
                    Sign Up
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}