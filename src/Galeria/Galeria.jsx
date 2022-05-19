import "./Galeria.css";
import { Carousel } from "./carousel/Carousel";
import { useState } from "react";

function Galeria() {
  const [indexClickedImg, setIndexClickedImg] = useState(4);

  let roadToPicture = [];
  for (let i = 1; i <= 14; i++) {
    roadToPicture.push(
      process.env.PUBLIC_URL + "/assets/Galeria-foto/" + i + ".jpg"
    );
  }

  const Pictures = roadToPicture.map(function (name, index) {
    return (
      <div key={index} className="grid-box">
        <img
          onClick={() => {
            setIndexClickedImg(index);
          }}
          src={name}
          alt=""
        />
      </div>
    );
  });

  return (
    <section id="galeria">
      <div>
        <div className="galeria-title">
          <strong>02</strong>
          <h1 className="text_bold">GALERIA</h1>
          <hr />
        </div>
        <div className="picture-grid">{Pictures}</div>
      </div>
      <div className="carousel-background">
        <div className="carousel">
          <Carousel roadToImg={roadToPicture} indexImg={indexClickedImg} />
        </div>
      </div>
    </section>
  );
}

export default Galeria;
