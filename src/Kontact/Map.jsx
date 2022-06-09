import React, { useCallback, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
// import s from "./Map.css";

const containerStyle = {
  width: "650px",
  height: "350px",
};

const Map = ({ center }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = undefined;
  }, []);

  return (
    <div className='mapContainer'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};
export { Map };
