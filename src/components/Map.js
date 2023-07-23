import React from "react";
import GoogleMapReact from 'google-map-react';
import key from "../config.json"


import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";



export default function Map() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key.apiKey,
  });
  const center = useMemo(() => ({ lat: 40.43894940762834, lng: -3.700006859118449 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={14}
        >
          <Marker position={{ lat: 40.43894940762834, lng: -3.700006859118449 }} />
        </GoogleMap>
      )}
    </div>
  );

}