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
                        <a href="/#home-section">
                            <img src={require("../images/logo/logo1.png")} alt="Logo-picture" className="logo"/>
                        </a>                        
                    </div>
                    <ul className="nav--items">
                        <li>
                           <a href="/#home-section" className="navbar-link">{props.french ? "Page d'accueil" : "Home"}</a> 
                        </li>
                        <li>
                            <a href="/#programs-section" className="navbar-link">{props.french ? "Programmes et ligues" : "Programs and Leagues"}</a>
                        </li>
                        <li>
                            <a href="/#fields-section" className="navbar-link">{props.french ? "Des champs" : "Fields"}</a>
                        </li>
                        <li>
                            <a href="/#team-section" className="navbar-link">{props.french ? "Équipe" : "Team"}</a>
                        </li>
                        <li>
                            <a href="/#contact-section" className="navbar-link">{props.french ? "Contact" : "Contact"}</a>
                        </li>
                        <li>
                            <a href="/#gallery-section" className="navbar-link">{props.french ? "Galerie" : "Gallery"}</a>
                        </li>
                        <FormControlLabel control={<Switch onChange={props.changeLanguage}/>} label="Fr" labelPlacement="start" className="lang-switch"/>
                    </ul>
                </div>
            </nav>
        </div>
         
    );
}

