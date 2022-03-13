// CONFIG IMPORTS
import React from 'react';

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
          <div className="boxes d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="box col-12 col-sm-6 col-md-4 p-3">
              <div className="box-content">
                <img src="" alt="" className="img-box" />
              </div>
            </div>
            <div className="box col-12 col-sm-6 col-md-4 p-3">div1</div>
            <div className="box col-12 col-sm-6 col-md-4 p-3">div1</div>
          </div>
        </div>
      </div>
      <div className="contest-section">

      </div>
    </div>
  );
};

export default Home;