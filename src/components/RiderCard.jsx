// CONFIG IMPORTS
import React from 'react';

const RiderCard = ({rider}) => {
  const {first_name, last_name, city, state, img_url} = rider
  return (
    <div className="rider-card col-12 col-sm-6 col-md-4 col-lg-3 px-2 py-3">
      <div className="card-content">
        <img src={img_url} alt={first_name + " " + last_name + " photo"} />
        <div className="overlay"></div>
        <div className="rider-info">
          <h3 className="text-center h2">{first_name}</h3>
          <h3 className="text-center mb-4 h2">{last_name}</h3>
          <p className="text-center mt-2 mb-3 h5"><strong>City: </strong>{city}</p>
          <p className="text-center h5"><strong>State: </strong>{state}</p>
        </div>
      </div>
    </div>
  );
};

export default RiderCard;


