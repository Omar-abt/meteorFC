import React from "react";

import Navbar from "./Navbar"
import Body from "./Body";
import Leagues from "./Programs";
import Fields from "./Fields"
import Team from "./Team"
import Contact from "./Contact"
import Gallery from "./Gallery"

export default function Home(props) {

    return (
        <div>
            <Navbar french={props.french} changeLanguage={props.changeLanguage}/>
            <Body french={props.french}/>
            <Leagues french={props.french}/>
            <Fields />
            <Team />
            <Contact />
            <Gallery />
        </div>
    );
}