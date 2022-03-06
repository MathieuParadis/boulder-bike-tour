// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column flex-lg-row justify-content-between">
        <img src={logo} alt="Boulder Bike Tour logo" className="logo" />
        <div>
          <h5 className="mb-3"><strong>BBT Sport center</strong></h5>
          <p className="mb-1">617 Cooper Avenue</p>
          <p className="mb-1">Aspen, CO 81611</p>
          <p className="mb-1">+1 (877) 611-2812</p>
        </div>
        <div>
          <h5 className="mb-3"><strong>Resources</strong></h5>
          <p className="mb-1">
            <NavLink exact="true" to="/contact" className="navlink">Contact</NavLink>
          </p>
          <p className="mb-1">
            <NavLink exact="true" to="/community" className="navlink">Community</NavLink>
          </p>
          <p className="mb-1">
            <NavLink exact="true" to="/donate" className="navlink">Donate</NavLink>
          </p>
        </div>
        <div>
          <h5 className="mb-3"><strong>Partners</strong></h5>
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
        <div>
          <h5 className="mb-3"><strong>Follow us</strong></h5>
          <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" />
          <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" />
          <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;