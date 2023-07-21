import React from "react";
import Card from 'react-bootstrap/Card';

export default function PlayerCard(props) {

    return (
        <Card style={{ width: '13.5rem' }} className="player-card no-padding">
            <Card.Img variant="top" src={require(`../images/${props.img}`)} alt="Player card picture" className="player-card--img"/>
            <Card.Body className="player-card--body">
                <Card.Title className="player-card--name">{props.name}</Card.Title>
                <Card.Text className="player-card--position">
                    {props.position}
                </Card.Text>
                <Card.Text className="player-card--jersey">
                    {props.jersey}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}