// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import homepage_bg from '../assets/images/homepage_bg.jpeg';

const Home = () => {

  return (
    <div className="home">
      <div className="hero-section">
        <div className="bg-picture"></div>
        <div></div>
      </div>
      <div className="box-section">
        <div className="colored-bg d-flex justify-content-center align-items-center">
          <div className="boxes d-flex flex-wrap flex-row justify-content-center align-items-center">
            <NavLink exact="true" to="/race" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={homepage_bg} alt="" className="img-box" />
                  <h3 className="text-center">Race<br></br>Information</h3>
                </div>
            </NavLink>
            <NavLink exact="true" to="/area" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={homepage_bg} alt="" className="img-box" />
                  <h3 className="text-center">About the<br></br>Area</h3>
                </div>
            </NavLink>
            <NavLink exact="true" to="/volunteer" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={homepage_bg} alt="" className="img-box" />
                  <h3 className="text-center">Become a<br></br>Volunteer</h3>
                </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="contest-section">

      </div>
    </div>
  );
};

export default Home;