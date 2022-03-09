




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
  const [color, setColor] = useState('#ffd700')

  return (
    <div className="locations d-flex justify-content-center align-items-center my-4">
      
      <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
        <ZoomControl />
        {
          riders.map((rider) => {
            return (
              <Marker width={100} anchor={[rider.position.lat, rider.position.lgn]} color={color} />
            )
          })
        }




        {/* <Marker width={100} anchor={coordinates} color={'#ffd700'} onClick={() => displayBubbleRiderInfo()} className="marker" />
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
        </Overlay> */}
      </Map>

    </div>
  );
};

export default Locations;