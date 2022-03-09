// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapModal = ({rider}) => {
  const modal = document.querySelector(".map-modal");
  const bubbleRider = document.querySelector(".bubble-rider");

  const [center, setCenter] = useState([40.014984, -105.270546]) // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(13)
  const [coordinates, setCoordinates] = useState([]) // default center: Boulder, Colorado

  const displayBubbleRiderInfo = () => {
    bubbleRider.style.visibility = 'visible';
  }

  const closeBubbleRiderInfo = () => {
    bubbleRider.style.visibility = 'hidden';
  }

  const closeModal = () => {
    modal.style.visibility = "hidden";
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.map-modal-overlay') &&
    event.target !== document.querySelector('.map-modal-content') &&
    closeModal();

    event.target === document.querySelector('.map-modal-overlay') &&
    event.target !== document.querySelector('.map-modal-content') &&
    closeBubbleRiderInfo();

    event.target === document.querySelector('.pigeon-overlays') &&
    closeBubbleRiderInfo();

  };

  useEffect(() => {
    if (rider) {
      setCenter([rider.position.lat, rider.position.lgn]);
      setCoordinates([rider.position.lat, rider.position.lgn]);
    }
  }, [rider]);

  return (
    <div className="map-modal">
      <div className="map-modal-overlay"></div>
      <div className="map-modal-content">
        {rider && (
          <>
            <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={13} zoom={zoom}>
              <ZoomControl />
              <Marker width={100} anchor={coordinates} color={'#ffd700'} onClick={() => displayBubbleRiderInfo()} className="marker" />
              <Overlay anchor={coordinates} offset={[0, 0]}>
                <div className="bubble-rider">
                  <div className="pointer"></div>
                  <div className="bubble d-flex flex-column justify-content-around align-items-center">
                    <h3 className="m-0">{rider.first_name}</h3>
                    <h3 className="m-0">{rider.last_name}</h3>
                    <p className="m-0"><strong>Lat: </strong>{rider.position.lat}</p>
                    <p className="m-0"><strong>Lgn: </strong>{rider.position.lgn}</p>
                  </div>
                </div>
              </Overlay>
            </Map>
          </>
        )}
      </div>
    </div>
  );
};

export default MapModal;