// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
        <img src={logo} alt="Boulder Bike Tour logo" className="logo mb-4 mb-lg-0" />
        <div className="mb-4 mb-lg-0 text-center text-lg-start">
          <h5 className="mb-2 mb-lg-3"><strong>BBT Sport center</strong></h5>
          <p className="mb-1">617 Cooper Avenue</p>
          <p className="mb-1">Aspen, CO 81611</p>
          <p className="mb-1">+1 (877) 611-2812</p>
        </div>
        <div className="mb-4 mb-lg-0 text-center text-lg-start">
          <h5 className="mb-2 mb-lg-3"><strong>Resources</strong></h5>
          <p className="mb-1">
            <NavLink exact="true" to="/contact" className="navlink">Contact</NavLink>
          </p>
          <p className="mb-1">
            <NavLink exact="true" to="/volunteer" className="navlink">Volunteering</NavLink>
          </p>
          <p className="mb-1">
            <NavLink exact="true" to="/community" className="navlink">Community</NavLink>
          </p>
        </div>
        <div className="mb-4 mb-lg-0 text-center text-lg-start">
          <h5 className="mb-2 mb-lg-3"><strong>Partners</strong></h5>
          <p className="mb-1">
            <a href="https://www.redbull.com/" target="_blank">Red Bull</a>
          </p>
          <p className="mb-1">
            <a href="https://www.pro-bikegear.com/" target="_blank">PRO Bikegear</a>
          </p>
          <p className="mb-1">
            <a href="https://www.canyon.com/" target="_blank">Canyon</a>
          </p>
        </div>
        <div className="mb-4 mb-lg-0 text-center text-lg-start">
          <h5 className="mb-2 mb-lg-3"><strong>Follow us</strong></h5>
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-twitter-square" size="3x" className="navlink"/>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" className="navlink mx-3"/>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="navlink"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;