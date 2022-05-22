import "./Galeria.css";
import { Carousel } from "./carousel/Carousel";
import { useState } from "react";

function Galeria() {
  const [indexClickedImg, setIndexClickedImg] = useState(4);
  let carousel;
  let carouselImg;

  let roadToPicture = [];

  for (let i = 1; i <= 14; i++) {
    roadToPicture.push(
      process.env.PUBLIC_URL + "/assets/Galeria-foto/" + i + ".jpg"
    );
  }

  const openCarousel = (idx) => {
    setIndexClickedImg(idx);
    if (!carousel || !carouselImg) {
      carousel = document.querySelector(".carousel-background");
      carouselImg = document.querySelector(".carousel");
    }

    carouselImg.classList.toggle("showCarousel");
    return carousel.classList.toggle("showCarousel");
  };

  const Pictures = roadToPicture.map(function (name, index) {
    return (
      <div key={index} className="grid-box">
        <img onClick={() => openCarousel(index)} src={name} alt="" />
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
      <div className="carousel-background" onClick={openCarousel}></div>
      <div className="carousel">
        <Carousel roadToImg={roadToPicture} indexImg={indexClickedImg} />
      </div>
    </section>
  );
}

export default Galeria;
