import "./Galeria.css";

function Galeria() {
    

    
  const allPicturesName = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];

   //  console.log(_allPictures)

  const Pictures = allPicturesName.map(function (name) {
    let _name =  "/assets/Galeria-foto/" + name;
    return (
      <div className="grid-box">
        <a href={_name} data-lightbox="galeria">
          <img src={_name} alt="" />
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
