// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';

// DATA IMPORTS
import riders from '../data/Riders';

// COMPONENT IMPORTS
import Banner from '../components/Banner';
import MapModal from '../components/MapModal';
import RiderCard from '../components/RiderCard';

// ASSETS IMPORTS
import riders_banner from '../assets/images/riders_banner.jpg';

const Riders = () => {
  const [currentRider, setCurrentRider] = useState(null);

  const openModal = (rider) => {
    setCurrentRider(rider);
    let modal = document.querySelector(".map-modal");
    modal.style.visibility = 'visible';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="riders">
      <Banner img={riders_banner} title="Riders" />
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        { riders && riders.length > 0 ?
          (
            riders.map((rider) => {
              return (
                <RiderCard rider={rider} setOpenModal={openModal} key={rider.first_name + " " + rider.last_name}/>
              )
            })
          ) :
          (
            <ReactLoading type={"spinningBubbles"} color={"#3385d6"} height={'20%'} width={'20%'} />
          )
        }
      </div>
      <MapModal rider={currentRider}/>
    </div>
  );
};

export default Riders;