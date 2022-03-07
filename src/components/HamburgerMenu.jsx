// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const handleMenu = () => {
    document.querySelector(".span1").classList.toggle("clicked");
    document.querySelector(".span2").classList.toggle("clicked");
    document.querySelector(".span3").classList.toggle("clicked");
    document.querySelector(".menu").classList.toggle("clicked");
    document.querySelector("body").classList.toggle("clicked");
  };

  return (
    <div>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="menu">
        <NavLink className="menu-link" exact="true" to="/" onClick={handleMenu}>Home</NavLink>
        {/* <NavLink className="menu-link" exact="true" to="/portfolio" onClick={handleMenu}>Portfolio</NavLink>
        <NavLink className="menu-link" exact="true" to="/resume" onClick={handleMenu}>Resume</NavLink>
        <NavLink className="menu-link" exact="true" to="/contact" onClick={handleMenu}>Contact</NavLink> */}
      </div>
    </div>
  );
};

export default HamburgerMenu;