// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapModal = ({rider}) => {

  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(14)

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


  useEffect(() => {
    if (rider) {
      setCenter([rider.position.lat, rider.position.lgn])
    }
  }, [rider]);

  return (
    <div className="map-modal">
      <div className="map-modal-overlay"></div>
      <div className="map-modal-content">
        {rider && (
          <>
            <Map
              provider={maptilerProvider}
              dprs={[1, 2]} // this provider supports HiDPI tiles
              center={center}
              defaultZoom={13}
              zoom={zoom}
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