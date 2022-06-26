import React, { useCallback, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css";

let containerStyle = {
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

  // let maprt;
  // if ((window.outerWidth = "1366")) {
  //   maprt = (
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={19}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >
  //       <Marker position={center} />
  //     </GoogleMap>
  //   );
  //   // console.log('100');
  // } else {
  // }
  // window.onresize = () => {
  //   console.log(window.outerWidth);
  //   if (window.outerWidth <= 700) {
  //     containerStyle = {
  //       width: "400px",
  //       height: "350px",
  //     };
  //     console.log("ccccc1111");
  //   }
  // };

  // width: `${window.innerWidth}px`,
  // const changecontainer = () => {
  //   if (window.outerWidth <= 700) {
  //     containerStyle = {
  //       // width: `${window.innerWidth}px`,
  //       maxWidth:'400px',
  //       width: "100%",
  //       height: "350px",
  //     };
  //     console.log("ccccc");
  //   }
  //   console.log("1111");
  // };

  // trigger

  return (
    <div className="mapContainer">
      {/* {maprt} */}
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
