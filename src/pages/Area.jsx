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
    </div>
  );
};

export default Area;