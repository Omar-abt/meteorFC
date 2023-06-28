import React from "react";
import CardElem from "./CardElem"
import leagueData from "../data/leagueData"


export default function Programs() {

    const leagueCards = leagueData.map(item => {
        return (
            <div className="col" key={item.id}>
                <CardElem 
                    title={item.title}
                    img={item.img}
                />
            </div>
        );
    });


    return (
        <div className="programs">
            <div className="leagues">
                <div className="container-fluid container-formatting">
                    <h1 className="title left-padding">Leagues</h1>
                    <div className="row">
                        {leagueCards}
                    </div>
                </div>
                
            </div>

            <div className="tournaments">
                <div className="container-fluid container-formatting">
                    <h1 className="title left-padding">Tournaments</h1>
                    <div className="row left-padding">
                        <div className="col-2">
                            <div className="tournament_logo">
                                <h1 style={{fontSize:"40px"}}>Logo</h1>
                            </div>     
                        </div>
                        <div className="col-10">
                            <p className="tournament_title no-margin">Tournament Name</p>
                            <p className="tournament_details no-margin">Date</p>
                            <p className="tournament_details no-margin">Age</p>
                            <p className="tournament_details no-margin">Location</p>
                        </div>
                    </div>               
                </div>
            </div>
            
            <div style={{marginBottom:"50px"}}></div>

            <div className="container-fluid" style={{padding:"0"}}>
                <img src= {require("../images/wide_wallpaper.jpeg")} className="wide_image"/>
            </div>
        </div>
    );
}