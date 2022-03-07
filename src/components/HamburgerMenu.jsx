// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu = () => {
  const handleMenu = () => {
    document.querySelector(".span1").classList.toggle("clicked");
    document.querySelector(".span2").classList.toggle("clicked");
    document.querySelector(".span3").classList.toggle("clicked");
    document.querySelector(".overlay").classList.toggle("clicked");
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
      <div className="overlay"></div>
      <div className="menu">
        <NavLink className="menu-link my-3" exact="true" to="/" onClick={handleMenu}>Home</NavLink>
        <NavLink className="menu-link my-3" exact="true" to="/photos" onClick={handleMenu}>Photos</NavLink> 
        <NavLink className="menu-link my-3" exact="true" to="/riders" onClick={handleMenu}>Riders</NavLink>
        <div className="my-3 py-3">
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" className="social-networks me-1 text-white"/>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" size="2x" className="social-networks mx-3 text-white"/>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" className="social-networks ms-1 text-white"/>
          </a>
        </div>
        <NavLink exact="true" to="/contest" className="contest-button h4 my-3 p-3 text-white text-center">Join contest</NavLink>
      </div>
    </div>
  );
};

export default HamburgerMenu;