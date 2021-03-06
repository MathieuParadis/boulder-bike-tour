// CONFIG IMPORTS
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTS IMPORTS
import Countdown from '../components/Countdown';

// ASSETS IMPORTS
import race from '../assets/images/race_illustration.jpeg';
import area from '../assets/images/area_illustration.jpg';
import volunteer from '../assets/images/volunteer illustration.jpeg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="bg-picture"></div>
        <div className="hero-content d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="col-12 col-md-6 flex-column justify-content-center align-items-center mb-5 pb-5 pb-md-0">
            <h1 className="hero-section-title">Once in a lifetime experience</h1>
            <p className="hero-section-hashtag mb-2 mb-md-5 pb-4">#BBTour</p>
            <NavLink exact="true" to="/race" className="hero-button h2 mt-5 px-4 py-3 text-white text-center">Learn more</NavLink>
          </div>
          <Countdown />
        </div>
      </div>

      <div className="box-section">
        <div className="colored-bg d-flex justify-content-center align-items-center">
          <div className="boxes d-flex flex-wrap flex-row justify-content-center align-items-center">
            <NavLink exact="true" to="/race" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={race} alt="area illustration" className="img-box" />
                  <h3 className="text-center">Race<br></br>Information</h3>
                </div>
            </NavLink>
            <NavLink exact="true" to="/area" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={area} alt="area illustration" className="img-box" />
                  <h3 className="text-center">About the<br></br>Area</h3>
                </div>
            </NavLink>
            <NavLink exact="true" to="/volunteer" className="box d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-4 p-3">
                <div className="box-content d-flex flex-column justify-content-center align-items-center">
                  <img src={volunteer} alt="volunteer illustration" className="img-box" />
                  <h3 className="text-center">Become a<br></br>Volunteer</h3>
                </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="contest-section">
        <div className="bg-picture"></div>
        <div className="contest-content d-flex flex-column justify-content-center align-items-center">
          <h3 className="contest-section-title text-center pb-5">Participate to our slogan contest</h3>
          <p className="contest-section-description text-center">And try to win your ticket for the next edition</p>
          <NavLink exact="true" to="/contest" className="contest-button h2 mt-5 px-4 py-3 text-white text-center">Join contest</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;