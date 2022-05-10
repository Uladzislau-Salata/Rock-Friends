import "./Galeria.css";

function Galeria() {
  let roadToPicture = [];
  for (let i = 1; i <= 14; i++) {
    roadToPicture.push(
      process.env.PUBLIC_URL + "/assets/Galeria-foto/" + i + ".jpg");
  }
  console.log(roadToPicture);
  const Pictures = roadToPicture.map(function (name, index) {
    return (
      <div key={index} className="grid-box">
        <a href={name} data-lightbox="galeria">
          <img src={name} alt="" />
        </a>
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
    </section>
  );
}

export default Galeria;
