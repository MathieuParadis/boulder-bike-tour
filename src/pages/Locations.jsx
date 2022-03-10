// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// DATA IMPORTS
import riders from '../data/Riders';

// ASSETS IMPORTS
import rider_logo from '../assets/images/rider.svg';

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const Locations = () => {
  const bubbleRider = document.querySelector(".bubble-rider");

  const [center, setCenter] = useState([40.014984, -105.270546]); // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(12);
  const [currentRider, setCurrentRider] = useState("");
  const [coordinatesBlueMarker, setCoordinatesBlueMarker] = useState([0, 0]);

  const displayBubbleRiderInfo = (rider) => {
    bubbleRider.style.visibility = 'visible';
    setCurrentRider(rider);
    setCenter([rider.position.lat, rider.position.lgn]);
    setZoom(13);
    setCoordinatesBlueMarker([rider.position.lat, rider.position.lgn]);
  }

  const closeBubbleRiderInfo = () => {
    bubbleRider.style.visibility = 'hidden';
    setZoom(12);
    setCenter([40.014984, -105.270546]);
    setCoordinatesBlueMarker([0,0]);
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.pigeon-overlays') &&
    closeBubbleRiderInfo();
  };

  useEffect(() => {
    setCoordinatesBlueMarker([0, 0]);
  }, []);

  return (
    <div className="locations d-flex justify-content-center align-items-center my-4">
      <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
        <ZoomControl />
        {
          riders.map((rider) => {
            return (
              <Marker width={100} anchor={[rider.position.lat, rider.position.lgn]} color={'#ffd700'} onClick={() => displayBubbleRiderInfo(rider)} key={rider.first_name + rider.last_name} />
            )
          })
        }
        <Marker width={100} anchor={coordinatesBlueMarker} color={'#3385d6'} />
        <Overlay offset={[0, 0]}>
          <div className="bubble-rider">
            <div className="pointer"></div>
            <div className="bubble d-flex flex-column justify-content-around align-items-center">
              {
                currentRider && 
                <>
                  <img src={rider_logo} className="rider-logo" />
                  <h3 className="m-0">{currentRider.first_name}</h3>
                  <h3 className="m-0">{currentRider.last_name}</h3>
                  <p className="m-0"><strong>Lat: </strong>{currentRider.position.lat}</p>
                  <p className="m-0"><strong>Lgn: </strong>{currentRider.position.lgn}</p>
                </>
              }
            </div>
          </div>
        </Overlay>
      </Map>
    </div>
  );
};

export default Locations;