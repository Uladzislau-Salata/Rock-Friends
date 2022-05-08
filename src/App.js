import logo from './logo.svg';
import './App.css';
import Menu from "./Menu/Menu";
import React from "react";
import Galeria from "./Galeria/Galeria";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Menu />
      <Header />
      <Galeria />
    </div>
  );
}

export default App;
