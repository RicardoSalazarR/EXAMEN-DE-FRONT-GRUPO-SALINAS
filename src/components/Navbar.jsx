import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo"><img src={reactLogo} alt="" /></div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/carousel" onClick={() => setIsMenuOpen(false)}>
            Carousel
          </Link>
        </li>
        <li>
          <Link to="/employees" onClick={() => setIsMenuOpen(false)}>
            Empleados
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
