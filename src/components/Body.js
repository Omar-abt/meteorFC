import React from "react";
import Button from 'react-bootstrap/Button';

export default function Body() {
    return (
        <div className="img">
            <div className="home-main-content">
                <div className="container-fluid">
                    <h1 className="home-page-text">Looking to Join a <span>Team</span>?</h1>
                    <Button variant="warning" className="main-page-button">Explore programs and leagues</Button>
                </div>
            </div>
        </div>
    );

}