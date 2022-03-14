// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import area_banner from '../assets/images/area_banner.jpg';

const Area = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="area">
      <Banner img={area_banner} title="About the Area" />
      <div className="area-content">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-4">Sport, a vector of integration</h3>
          <p>Sport has a unique power to bring people together, attract, mobilize, inspire and generate social inclusion.</p>
          <p>All year long we organize events to promote cycling and sport in general, to less 
          </p>
          <p>Whether you like logistics (setting up refreshment stands, managing bikes, organizing the site, preparing meals, etc) or you prefer to be on the ground (checking markers, taking note of times, securing dangerous points etc), there is bound to be something that suits you as a volunteer. 
             And of course, all this happens in a joyful and good mood, always at least in pairs. So don't hesitate any longer and join the big family of the Boulder Bike Tour volunteers!</p>
        </div>
      </div>
    </div>
  );
};

export default Area;