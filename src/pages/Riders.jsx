// CONFIG IMPORTS
import React from 'react';

// DATA IMPORTS
import riders from '../data/Riders';

const Riders = () => {
  return (
    <div className="riders">
      <h1>Riders</h1>
      {
        riders.map((rider) => {
          return (
            rider.first_name
          )
        })
      }
    </div>
  );
};

export default Riders;