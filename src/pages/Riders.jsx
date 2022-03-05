// CONFIG IMPORTS
import React from 'react';

// DATA IMPORTS
import riders from '../data/Riders';

// COMPONENT IMPORTS
import RiderCard from '../components/RiderCard';

const Riders = () => {
  return (
    <div className="riders">
      <h1>Riders</h1>
      <div className="d-flex flex-wrap">
        {
          riders.map((rider) => {
            return (
              <RiderCard rider={rider} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Riders;