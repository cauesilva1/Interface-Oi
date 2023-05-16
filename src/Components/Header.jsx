import React from "react";
import "./Header.css";
import minhaImagem from './images/LogoOI.png'; 

function Header() {
    return (
        <header>
          <div className="green-bar">
            <img className="img" src={minhaImagem} alt="Logo-OI" />
          </div>
        </header>
    )
}


export default Header;