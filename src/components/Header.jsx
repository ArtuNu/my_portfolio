import "../styles/header.css";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('curriculum_arturo.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'curriculum_arturo.pdf';
            alink.click();
        })
    })
}

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
        <a className="nav-a" onClick={onButtonClick}>
          CV
        </a>
      </nav>
      <div className="bars-container" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}
