// CONFIG IMPORTS
import React, {useState} from 'react';

// DATA IMPORTS
import riders from '../data/Riders';

// COMPONENT IMPORTS
import MapModal from '../components/MapModal';
import RiderCard from '../components/RiderCard';

const Riders = () => {
  const [currentRider, setCurrentRider] = useState(null);

  const openModal = (rider) => {
    setCurrentRider(rider);
    let modal = document.querySelector(".map-modal");
    modal.style.visibility = 'visible';
  }

  return (
    <div className="riders">
      <h1>Riders</h1>
      <p className="d-flex d-lg-none">Press card to display info about the rider</p>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        {
          riders.map((rider) => {
            return (
              <RiderCard rider={rider} setOpenModal={openModal} key={rider.first_name + " " + rider.last_name}/>
            )
          })
        }
      </div>
      <MapModal rider={currentRider}/>
    </div>
  );
};

export default Riders;