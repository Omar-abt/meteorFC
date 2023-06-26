import React from "react";

export default function Navbar() {
    return (            
        <div className="sticky-top">
            <div className="nav--yellow-stripe"></div>
            <nav className="navbar">
                <div className="container-fluid">
                    <div>
                        <h1 className="no-margin">Logo</h1>
                    </div>
                    <ul className="nav--items">
                        <li>Home</li>
                        <li>Programs and Leagues</li>
                        <li>Fields</li>
                        <li>Team</li>
                        <li>Contact</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </nav>
        </div>
         
    );
    // <div className="nav--yellow-stripe"></div>
}

