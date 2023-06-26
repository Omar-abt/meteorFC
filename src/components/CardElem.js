import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardElem(props) {

    // console.log(`../images/fields/${props.img}`)
    return (
        <Card style={{ width: '20rem' }} className="league_card">
            <Card.Img variant="top" src={require(`../images/${props.img}`)} className="league_card--image" />
            <Card.Body className="league_card--body">
            <Card.Title className="league_card--title">{props.title}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}