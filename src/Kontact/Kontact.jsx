import React from "react";

import "./Kontact.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import { Map } from "./Map";
import { useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 52.2324314,
  lng: 21.0019267,
};

const libraries = ["places"];

function Kontact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <section id="kontact">
      <div className="container">
        <div className="kontact-title">
          <strong>03</strong>
          <h1 className="headig bold">КОНТАКТЫ</h1>
          <hr />
        </div>
        <div className="addmap">
          <div className="adress">
            <ul>
              <li>
                <h3>Rock Friends</h3>
              </li>
              <li>
                <p className="haveicon">
                  <LocationOnIcon></LocationOnIcon><>ул. Слиска 3 (въезд с Сосновы)</>
                </p>
              </li>
              <li>
                <p className="haveicon">
                  <MapIcon></MapIcon>00-127 Варшава
                </p>
              </li>
              <li>
                <p className="haveicon">
                  <MarkunreadIcon></MarkunreadIcon>Послать сообщение
                </p>
              </li>
              <li>
                <p className="haveicon">
                  <LocalPhoneIcon></LocalPhoneIcon>22 370 22 86
                </p>
              </li>
              <li>
                <p className="haveicon">
                  <PhoneAndroidIcon></PhoneAndroidIcon>
                  <b>Аня</b>515 967 123
                </p>
              </li>
              <li>
                <p className="haveicon">
                  <PhoneAndroidIcon></PhoneAndroidIcon>
                  <b>Конрад</b> 514 900 777
                </p>
              </li>
              <br />
              <li>
                <p className="chart">
                  <b>Понедельник - Суббота 15-2</b>
                </p>
              </li>
              <li>
                <p className="chart">
                  <b>Воскресенье закрыто</b>
                </p>
              </li>
            </ul>
          </div>
          <div className="map">
            {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </section>
  );
}

export default Kontact;
