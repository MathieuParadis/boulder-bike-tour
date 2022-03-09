// CONFIG IMPORTS
import React from 'react';

const MapModal = ({rider}) => {
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
            <h1 className="m-0">{rider.first_name}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MapModal;