// src/components/Header/Header.jsx
import React from "react";
import "../Header/Header.css"; // Asegúrate de tener un archivo CSS para los estilos del header
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Logo Around-U.s" className="header__logo" />
      </div>
    </header>
  );
}

export default Header;
