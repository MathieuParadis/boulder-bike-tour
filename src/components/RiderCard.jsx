// CONFIG IMPORTS
import React from 'react';

const RiderCard = ({rider, setOpenModal}) => {
  return (
    <div className="rider-card col-12 col-md-6 col-lg-4 col-xl-3 px-2 py-3">
      <div className="card-content">
        <img src={rider.img_url} alt={rider.first_name + " " + rider.last_name + " photo"} />
        <div className="overlay"></div>
        <div className="rider-info">
          <h3 className="name text-center h2">{rider.first_name}</h3>
          <h3 className="name text-center mb-4 h2">{rider.last_name}</h3>
          <p className="text-center mt-2 mb-3 h5"><strong>City: </strong>{rider.city}</p>
          <p className="text-center h5"><strong>State: </strong>{rider.state}</p>
          <p className="btn-locate-rider text-center h5 my-3 p-3 mb-0" onClick={() => setOpenModal(rider)}>Locate {rider.first_name}</p>
        </div>
      </div>
    </div>
  );
};

export default RiderCard;


