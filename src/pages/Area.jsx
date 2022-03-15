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
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center mb-4">
            <h3 className="mb-4">Boulder, Colorado</h3>
            <p>
              The City of Boulder is a home rule municipality that is the county seat and most populous municipality of Boulder County, Colorado.
              Boulder is located at the base of the foothills of the Rocky Mountains, at an elevation of 5,430 feet (1,655 m) above sea level. Boulder is 25 miles (40 km) northwest of the Colorado state capital of Denver. It is home of the main campus of the University of Colorado, the state's largest university.
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="mb-4">Biking in Boulder</h3>
            <p>
              Whether you're a road biker or mountain biker, Boulder is the perfect place for a two-wheeled adventure. Boulder boasts over 300+ miles of bike lanes and routes, a web of revered mountain bike trails and ample outlets for bike rentals. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;