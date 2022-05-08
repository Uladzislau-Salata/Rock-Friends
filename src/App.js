import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Galeria from "./Galeria/Galeria";
import Kontact from "./Kontact/Kontact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Galeria />
      <Kontact />
      <Footer />
    </div>
  );
}

export default App;
