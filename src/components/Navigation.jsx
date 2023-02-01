// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS IMPORTS
import HamburgerMenu from './HamburgerMenu';

// ASSETS IMPORTS
import logo from '../assets/logos/logo_name.svg';

const Navigation = () => {
  const year = (new Date(`2023/04/01 09:00:00`) > new Date() ? new Date().getFullYear() : new Date().getFullYear() + 1);

  const location = useLocation();
  const navigate = useNavigate()

  const refreshPage = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <HamburgerMenu />
      <div className="navigation">
        <div className="navbar-top d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <NavLink exact="true" to="/" className="h4 me-2 me-xl-4 mb-0">
              <img src={logo} alt="Boulder Bike Tour logo" className="logo mb-0 me-4 me-xl-5" onClick={refreshPage} />
            </NavLink>
          </div>
          <div className="d-none d-lg-flex align-items-center">
            <div>
              <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" className="social-networks me-1"/>
              </a>
              <a href="https://facebook.com/" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" size="2x" className="social-networks mx-3"/>
              </a>
              <a href="https://instagram.com/" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" className="social-networks ms-1"/>
              </a>
            </div>
            <NavLink exact="true" to="/contest" className="contest-button h4 ms-4 ms-xl-5 p-3 mb-0 text-white text-center">Join contest</NavLink>
          </div>
        </div>
        <div className="navbar-bottom d-none d-lg-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <NavLink exact="true" to="/" className="navlink h5 me-2 me-xl-4 mb-0">Home</NavLink>
            <NavLink exact="true" to="/race" className="navlink h5 mx-2 mx-xl-4 mb-0">Race</NavLink>
            <NavLink exact="true" to="/area" className="navlink h5 mx-2 mx-xl-4 mb-0">About the area</NavLink>
            <NavLink exact="true" to="/photos" className="navlink h5 mx-2 mx-xl-4 mb-0">Gallery</NavLink>
            <NavLink exact="true" to="/riders" className="navlink h5 mx-2 mx-xl-4 mb-0">Riders</NavLink>
            <NavLink exact="true" to="/riders-locations" className="navlink h5 ms-2 ms-xl-4 mb-0">Locate Riders</NavLink>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="date h5 m-0">April 01, {year}</p>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Navigation;
