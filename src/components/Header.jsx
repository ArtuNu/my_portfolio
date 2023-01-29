import "../styles/header.css";
import { useState } from "react";
// import { a, BrowserRouter, Route, Switch } from "react-router-dom";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <div className="my-name-container">
        <p className="my-name">arturo nuñez web</p>
      </div>
      <nav className={`links ${click ? "active" : ""}`}>
        <a href="#aboutme" className="nav-a" onClick={handleClick}>
          Sobre_mí
        </a>
        <a href="#projects" className="nav-a" onClick={handleClick}>
          Poyectos
        </a>
        <a href="#contact" className="nav-a" onClick={handleClick}>
          Contacto
        </a>
        <a href="../../public/curriculum_arturo2023.pdf" className="nav-a">
          CV
        </a>
      </nav>
      <div className="bars-container" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}
