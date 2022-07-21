import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import "./style.scss";

const Map = (props) => {
  const location = props.location;
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon="clarity:map-marker-line" className="pin-icon" />
      <p className="pin-text">{location.address}</p>
    </div>
  );
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={location}>
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default Map;
