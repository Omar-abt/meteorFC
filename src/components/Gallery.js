import React from "react";

export default function Gallery() {
    return (
        <div className="gallery" id="gallery-section">
            <div className="container-fluid container-formatting">
                <div className="row g-3">
                    <h1 className="title left-padding">Gallery</h1>
                    <div className="col-5">
                        <div className="row g-0 gallery-col">
                            <img src={require("../images/gallery/gallery-img1.jpeg")} style={{height:"400px"}} className="gallery-img" />
                        </div>
                        <div className="row g-3">
                            <div className="col-4 gallery-col">
                                <img src={require("../images/gallery/gallery-img2.jpeg")} style={{height:"250px"}} className="gallery-img" />
                            </div>
                            <div className="col-8 gallery-col">
                                <img src={require("../images/gallery/gallery-img3.jpeg")} style={{height:"250px"}} className="gallery-img" />
                            </div>
                        </div>
                    </div>


                    <div className="col-7">
                        <div className="row gallery-col">
                            <img src={require("../images/gallery/gallery-img4.jpeg")} style={{height:"240px"}} className="gallery-img" />
                        </div>
                        <div className="row gallery-col">
                            <img src={require("../images/gallery/gallery-img5.jpeg")} style={{height:"410px"}} className="gallery-img" />
                        </div>
                    </div>
                </div>                
            </div>            
        </div>        
    );
}