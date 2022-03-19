// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';

// COMPONENT IMPORTS
import Banner from '../components/Banner';
import MapModal from '../components/MapModal';
import RiderCard from '../components/RiderCard';

// ASSETS IMPORTS
import riders_banner from '../assets/images/riders_banner.jpg';

const Riders = () => {
  const [riders, setRiders] = useState(null);
  const [currentRider, setCurrentRider] = useState(null);

  const getRidersData = () => {
    const url = '/riders';

    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log(response);
        setRiders(response);
    });
  }

  const openModal = (rider) => {
    setCurrentRider(rider);
    let modal = document.querySelector(".map-modal");
    modal.style.visibility = 'visible';
  }

  useEffect(() => { 
    getRidersData();
  }, []);

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
            <div className="d-flex justify-content-center align-items-center w-100 p-3">
              <ReactLoading type={"spinningBubbles"} color={"#3385d6"} height={'20%'} width={'20%'} />
            </div>
          )
        }
      </div>
      <MapModal rider={currentRider}/>
    </div>
  );
};

export default Riders;