import React from "react";

import SignupModal from "./SignupModal";

import ConfirmModal from "./ConfimModal"

export default function ProgramSearchCard(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Confirmationshow, setConfirmationShow] = React.useState(false);
    const handleConfirmationClose = () => setConfirmationShow(false);
    const handleConfirmationShow = () => setConfirmationShow(true);

    
    return (
        
            <div className="search-card">
                <a onClick={handleShow} className="search-card-link">
                    <img src={require(`../images/program-search/${props.img}`)} className="search-card--img" />
                    <h4 className="search-card--title">{props.leagueName}</h4>
                    <h6 className="search-card--desc">{props.skill}</h6>
                    <h6 className="search-card--desc">{props.age} years</h6>
                    <h6 className="search-card--desc">{props.date}</h6>
                </a>

                <SignupModal
                    leagueName={props.leagueName} 
                    show={show}
                    handleClose={handleClose}
                    confirmationShow={handleConfirmationShow}
                />

                <ConfirmModal
                    show={Confirmationshow}
                    handleClose={handleConfirmationClose}
                />

                {/* <ConfirmModal
                    show={show}
                    handleClose={handleClose}
                /> */}
            </div>
    );
}