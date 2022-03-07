// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// ASSETS IMPORTS
import logo from '../assets/logos/logo_name.svg';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Boulder Bike Tour logo" className="logo mb-4 mb-lg-0 me-5" />
          <div className="d-none d-lg-flex">
            <NavLink exact="true" to="/" className="navlink h4 ms-3 mb-0">Home</NavLink>
            <NavLink exact="true" to="/photos" className="navlink h4 mx-3 mb-0">Photos</NavLink>
            <NavLink exact="true" to="/riders" className="navlink h4 me-3 mb-0">Riders</NavLink>
          </div>
        </div>
        <div className="d-none d-lg-flex align-items-center">
          <div>
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" className="navlink"/>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" size="2x" className="navlink mx-3"/>
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" className="navlink"/>
          </div>
          <NavLink exact="true" to="/contest" className="contest-button h4 ms-5 p-3 mb-0 text-white">Join contest</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;