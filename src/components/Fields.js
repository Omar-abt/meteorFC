import React from "react";
import FieldCardElem from "./FieldCardElem"
import fieldData from "../data/fieldData"

export default function Fields() {

    
    const fieldCards = fieldData.map(item => {
        return (
            <div className="col" key={item.id}>
                <FieldCardElem 
                    title={item.title}
                    img={item.img}
                    description={item.description}
                    surface={item.surface}
                    dimensions={item.dimensions}
                />
            </div>
        );
    });


    return (
        <div className="fields" id="fields-section">
            <div className="container-fluid container-formatting">
                <div className="row">
                    <h1 className="title left-padding">Our Fields</h1>
                    <div>
                        <p className="fields--description left-padding">We are proud to offer our members access to three exceptional soccer fields: Field A, Field B, and Field C. These state-of-the-art fields have been meticulously designed to provide the perfect playing surface for both practice sessions and thrilling matches. Field A boasts a spacious layout with top-quality turf that ensures excellent ball control and player performance. Field B, with its meticulously maintained natural grass, offers a classic soccer experience that many players adore. Finally, Field C provides a smaller, more intimate setting, perfect for youth matches and skill-building exercises. </p>
                    </div>
                    {fieldCards}
                </div>
            </div>

            <div style={{marginBottom:"150px"}}></div>

        </div>
    );
}