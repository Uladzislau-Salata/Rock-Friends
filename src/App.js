import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Galeria from "./Galeria/Galeria";
import Kontact from "./Kontact/Kontact";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Galeria />
      <Kontact/>
    </div>
  );
}

export default App;
