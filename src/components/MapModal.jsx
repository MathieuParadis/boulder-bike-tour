// CONFIG IMPORTS
import React, {useState} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";

const MapModal = ({rider}) => {

  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)

  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`



  const closeModal = () => {
    let modal = document.querySelector(".map-modal");
    modal.style.visibility = "hidden";
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.map-modal-overlay') &&
    event.target !== document.querySelector('.map-modal-content') &&
      closeModal()
  };

  return (
    <div className="map-modal">
      <div className="map-modal-overlay"></div>
      <div className="map-modal-content">
        {rider && (
          <>


            <Map 
              center={center} 
              zoom={zoom} 
              onBoundsChanged={({ center, zoom }) => { 
                setCenter(center) 
                setZoom(zoom) 
              }} 
            >
              <ZoomControl />
            </Map>







          </>
        )}
      </div>
    </div>
  );
};

export default MapModal;