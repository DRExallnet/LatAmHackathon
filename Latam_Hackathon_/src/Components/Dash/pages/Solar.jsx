import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";

function Solar() {

  return (
    <div className="solar">
    {console.log(process.env.REACT_APP_MAP_KEY)}
      <Map className="container_S"
        mapboxAccessToken="pk.eyJ1IjoidGN4Y3giLCJhIjoiY2w3Z2toeGk0MDR3eDNvam52MWppdjc2dCJ9.b2wtY3B843IwNPRcyLxdBA"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "25px",
          border: "2px solid blue",
        }}
       
        mapStyle="mapbox://styles/tcxcx/cl7hpso78001m14u3znn5e6hp"
        projection="globe"
        >
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}


export default Solar;
