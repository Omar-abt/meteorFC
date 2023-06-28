import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FieldModal from "./FieldModal"


export default function CardElem(props) {

    return (
        <Card style={{ width: '20rem' }} className="league_card">
            <a onClick={handleShow} href="">
                <Card.Img variant="top" src={require(`../images/${props.img}`)} className="league_card--image" />
            </a>
            <Card.Body className="league_card--body">
            <Card.Title className="league_card--title">{props.title}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}