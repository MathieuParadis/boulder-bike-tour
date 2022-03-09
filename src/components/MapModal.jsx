// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapModal = ({rider}) => {

  // Map Center
  const [center, setCenter] = useState([40.014984, -105.270546]) // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(14)
  const [coordinates, setCoordinates] = useState([]) // default center: Boulder, Colorado

  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  const closeModal = () => {
    let modal = document.querySelector(".map-modal");
    modal.style.visibility = "hidden";
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.map-modal-overlay') &&
    event.target !== document.querySelector('.map-modal-content') &&
      closeModal();
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
            <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={13} zoom={zoom} >
              <Marker width={100} anchor={coordinates} color={color} onClick={() => setHue(hue + 20)} />
              <ZoomControl />
            </Map>
          </>
        )}
      </div>
    </div>
  );
};

export default MapModal;