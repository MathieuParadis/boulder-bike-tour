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
        <div className="d-flex flex-column justify-content-center">
          <h3 className="mb-4 text-center">The Boulder Bike Tour</h3>
          <p>
            The Boulder Bike Tour is a one in a decade bike race taking place at the foot of the Rocky Mountains.
            The next edition will be held on April 1st, 2022.
          </p>
          <p>
          The tour starts in Foothills Community Park at 9am, and finishes in Boulder Valley Ranch. The ride is about 58 miles
          and will take you through the most iconic and breath taking landscapes of the region
          </p>
          <p>
            The Boulder Bike Tour is meant to be whatever you make of it. Do it for fun, do it to challenge your personal best or do 
            it to win! Whatever your intent, you'll be glad you came! We encourage professionals, amateurs, recreational riders, clubs and 
            cycling teams to participate. It's time for all competitors to gear up and get ready to ride. All profits from the Tour support 
            ongoing efforts of the BBT Sport Center.
          </p>
          <p>
            The Boulder Bike Tour is limited to the first <strong>500</strong> registered riders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Race;