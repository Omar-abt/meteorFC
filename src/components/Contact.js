import React from "react";

import Map from "./Map"
import ContactUsForm from "./ContactUsForm"

export default function Contact() {
    return (
        <div className="contact" id="contact-section">
            <div className="container-fluid container-formatting gallery">
                <div className="row">
                    <h1 className="title left-padding">Contact Us</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row contact-item-container">
                            <h2 className="contact-item-title" style={{marginTop: "15%"}}>Location</h2>
                            <h4 className="contact-item-item">Calle de Sta Engracia, 119, 28003 Madrid, Spain</h4>
                        </div>
                        <div className="row contact-item-container">
                            <h2 className="contact-item-title">Phone</h2>
                            <h4 className="contact-item-item">+228 96 10 59 12</h4>
                        </div>
                        <div className="row contact-item-container">
                            <h2 className="contact-item-title">Email</h2>
                            <h4 className="contact-item-item">contact@meteorFC.com</h4>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="map-container">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row message-row">
                    <div className="message-container">
                        <h2 className="contact-form-title">Send us a message</h2>
                        <ContactUsForm />
                    </div>
                </div>
            </div>

            <div style={{marginBottom:"100px"}}></div>
        </div>
    );
}