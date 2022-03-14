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
      <div className="volunteer-content">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-4">Volunteering, what is it?</h3>
          <p>Becoming a volunteer for the Boulder Bike Tour is first and foremost an opportunity to get involved in an association whose goal is to encounter nature and to surpass oneself.</p>
          <p>It is also an opportunity to discover the mountain landscapes, to meet other people and to support the men and women who will work all day to achieve their sporting challenge.</p>
          <p>
            Whether you like logistics (setting up refreshment stands, managing bikes, organizing the site, preparing meals, etc) or you prefer to be on the ground 
            (checking markers, taking note of times, securing dangerous points etc), there is bound to be something that suits you as a volunteer. 
            And of course, all this happens in a joyful and good mood, always at least in pairs. So don't hesitate any longer and join the big family of the Boulder Bike Tour volunteers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;