// CONFIG IMPORTS
import React from 'react';

const RiderCard = ({rider}) => {
  const {first_name, last_name, city, state, img_url} = rider
  return (
    <div className="rider-card col-12 col-sm-6 col-md-4 col-lg-3 px-2 py-3">
      <div className="card-front">
        <img src={img_url} alt={first_name + " " + last_name + " photo"} />
      </div>
      <div className="card-back">
        <div className="overlay"></div>
        <div className="rider-info">
          <h3>{first_name + " " + last_name}</h3>
        </div>
      </div>
    </div>
  );
};

export default RiderCard;


