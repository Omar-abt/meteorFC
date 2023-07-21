import React from "react";
import Button from 'react-bootstrap/Button';

export default function Body(props) {

    return (
        <div className="homepage" id="home-section">
            <div className="home-main-content">
                <div className="container-fluid">
                    <h1 className="home-page-text">{props.french ? "Vous cherchez à rejoindre un " : "Looking to Join a "}
                    <span>{props.french ? "Equipe" : "Team"}</span>?</h1>
                    <Button 
                        variant="warning"
                        className="main-page-button" 
                        href="#programs-section">
                        {props.french ? "Explorez les programmes et les ligues" : "Explore programs and leagues"}
                    </Button>
                </div>
            </div>
        </div>
    );

}