




  // CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// DATA IMPORTS
import riders from '../data/Riders';

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const Locations = () => {
  const [center, setCenter] = useState([40.014984, -105.270546]); // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(12);
  const [color, setColor] = useState('#ffd700');
  const [currentRider, setCurrentRider] = useState(null);

  const [coordinates, setCoordinates] = useState([]);

  // useEffect(() => {
  //   if (rider) {
  //     setCoordinates([rider.position.lat, rider.position.lgn]);
  //   }
  // }, [rider]);

  const displayBubbleRiderInfo = (rider) => {
    // setColor("#0066cc");
    // setCurrentRider(rider);
    alert(rider.first_name);
  }

  return (
    <div className="locations d-flex justify-content-center align-items-center my-4">
      
      <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
        <ZoomControl />
        {
          riders.map((rider) => {
            return (
              <Marker width={100} anchor={[rider.position.lat, rider.position.lgn]} color={color} onMouseOver={() => displayBubbleRiderInfo(rider)} />
            )
          })
        }


      </Map>

    </div>
  );
};

export default Locations;