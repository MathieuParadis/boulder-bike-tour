// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <img src={logo} alt="Boulder Bike Tour logo" className="logo" />
        <div>
          <h5 className="mb-3"><strong>BBT Sport center</strong></h5>
          <p className="mb-1">617 Cooper Avenue</p>
          <p className="mb-1">Aspen, CO 81611</p>
          <p className="mb-1">+1 (877) 611-2812</p>
        </div>
        <div>
          <h5 className="mb-3"><strong>Resources</strong></h5>

        </div>
        <div>
          <h5 className="mb-3"><strong>Partners</strong></h5>
          <p className="mb-1">
            <a href="https://www.redbull.com/" target="_blank">Red Bull</a>
          </p>
          <p className="mb-1">
            <a href="https://www.pro-bikegear.com/" target="_blank">PRo Bikegear</a>
          </p>
          <p className="mb-1">
            <a href="https://www.canyon.com/" target="_blank">Canyon</a>
          </p>
        </div>
        <div>
          <h5 className="mb-3"><strong>Follow us</strong></h5>

        </div>
      </div>
    </div>
  );
};

export default Footer;