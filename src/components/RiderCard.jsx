// CONFIG IMPORTS
import React from 'react';

const RiderCard = ({rider}) => {
  const {first_name, last_name, city, state, img_url} = rider
  return (
    <div className="rider-card col-12 col-md-6 col-lg-3 my-3 p-0 px-sm-2">
      <img src={img_url} alt={first_name + " " + last_name + " photo"} />
    </div>
  );
};

export default RiderCard;


