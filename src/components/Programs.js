import React from "react";
import LeagueCardElem from "./LeagueCardElem"
import leagueData from "../data/leagueData"


export default function Programs(props) {

    const leagueCards = leagueData.map(item => {
        return (
            <div className="col" key={item.id}>
                <LeagueCardElem 
                    title={props.french ? item.title_fr : item.title}
                    img={item.img}
                    description={item.description}
                    ageRange = {item.ageRange}
                    skillLevel = {item.skillLevel}
                    fields = {item.fields}
                />
            </div>
        );
    });


    return (
        <div className="programs" id="programs-section">
            <div className="leagues">
                <div className="container-fluid container-formatting">
                    <h1 className="title left-padding">{props.french ? "Ligues" : "Leagues"}</h1>
                    <div className="row">
                        {leagueCards}
                    </div>
                </div>
                
            </div>

            <div className="tournaments">
                <div className="container-fluid container-formatting">
                    <h1 className="title left-padding" style={{marginBottom:"60px"}}>{props.french ? "Tournois" : "Tournaments"}</h1>
                    <div className="row left-padding g-0">
                        <div className="col-3">
                            <div>
                                <img src={require("../images/logo/tournament.png")} alt="tournament-logo" className="tournament-logo" />
                            </div>     
                        </div>
                        <div className="col-9">
                            <p className="tournament_title no-margin">{props.french ? "Coupe des champions" : "Champions Cup"}</p>

                            <p className="tournament_details no-margin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                                {props.french ? "23 août, 2023" : "August 23, 2023"}</p>

                            <p className="tournament_details no-margin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                                {props.french ? "18 ans - 30 ans" : "18 yrs - 30 yrs"}</p>

                            <p className="tournament_details no-margin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                                {props.french ? "Stade de Wembley" : "Wembley Stadium"}</p>
                        </div>
                    </div>               
                </div>
            </div>
            
            <div style={{marginBottom:"100px"}}></div>

            <div className="container-fluid" style={{padding:"0"}}>
                <img src={require("../images/wide_wallpaper.jpeg")} alt="Dividing wallpaper" className="wide_image"/>
            </div>

            <div style={{marginBottom:"100px"}}></div>
        </div>
    );
}