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
    </div>
  );
};

export default Race;