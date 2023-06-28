import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import PlayerCard from "./PlayerCard"

import playerData from "../data/playerData"
import coachData from "../data/coachData"


export default function Team() {

    const playerCards = playerData.map(item => {
        return (
                <PlayerCard 
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    position={item.position}
                    jersey={item.jersey}
                />
        );
    });

    const coachCards = coachData.map(item => {
        return (
                <PlayerCard 
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    position={item.position}
                />
        );
    });


    return (
        <div className="team">
            <div className="team-roster">
                <div className="container-fluid container-formatting">
                    <div className="row">
                        <h1 className="title left-padding">Team Roster</h1>
                    </div>
                    <div className="row">
                    <Accordion className="left-padding">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>View professional team</Accordion.Header>
                            <Accordion.Body>
                                <div className="container-fluid">
                                    <div className="row justify-content">
                                        {playerCards}
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </div>

            <div style={{marginBottom:"100px"}}></div>

            <div className="coaching-staff">
                <div className="container-fluid container-formatting">
                    <div className="row">
                        <h1 className="title left-padding">Coaching Staff</h1>
                    </div>
                    <div className="row">
                    <Accordion className="left-padding">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>View coaching staff</Accordion.Header>
                            <Accordion.Body>
                                <div className="container-fluid">
                                    <div className="row justify-content">
                                        {coachCards}
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}