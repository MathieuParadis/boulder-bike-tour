// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import race_banner from '../assets/images/race_banner.jpeg';

const Race = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="race">
      <Banner img={race_banner} title="The Race" />
      <div className="race-content">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-4">Sport, a vector of integration</h3>
          <p>Sport has a unique power to bring people together, attract, mobilize, inspire and generate social inclusion.</p>
        </div>
      </div>
    </div>
  );
};

export default Race;