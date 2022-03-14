// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import Banner from '../components/Banner';

// ASSETS IMPORTS
import volunteer_banner from '../assets/images/volunteer_banner.jpg';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="volunteer">
      <Banner img={volunteer_banner} title="Become a Volunteer" />
    </div>
  );
};

export default Volunteer;