import React from "react";

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Navbar(props) {
    return (            
        <div className="sticky-top">
            <div className="nav--yellow-stripe"></div>
            <nav className="navbar" role="navigation">
                <div className="container-fluid">
                    <div>
                        <a href="/meteorFC#home-section">
                            <img src={require("../images/logo/logo1.png")} alt="Logo-picture" className="logo"/>
                        </a>                        
                    </div>
                    <ul className="nav--items">
                        <li>
                           <a href="/meteorFC#home-section" className="navbar-link">{props.french ? "Page d'accueil" : "Home"}</a> 
                        </li>
                        <li>
                            <a href="/meteorFC#programs-section" className="navbar-link">{props.french ? "Programmes et ligues" : "Programs and Leagues"}</a>
                        </li>
                        <li>
                            <a href="/meteorFC#fields-section" className="navbar-link">{props.french ? "Des champs" : "Fields"}</a>
                        </li>
                        <li>
                            <a href="/meteorFC#team-section" className="navbar-link">{props.french ? "Équipe" : "Team"}</a>
                        </li>
                        <li>
                            <a href="/meteorFC#contact-section" className="navbar-link">{props.french ? "Contact" : "Contact"}</a>
                        </li>
                        <li>
                            <a href="/meteorFC#gallery-section" className="navbar-link">{props.french ? "Galerie" : "Gallery"}</a>
                        </li>
                        <FormControlLabel control={<Switch onChange={props.changeLanguage}/>} label="Fr" labelPlacement="start" className="lang-switch"/>
                    </ul>
                </div>
            </nav>
        </div>
         
    );
}

