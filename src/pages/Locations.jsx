// CONFIG IMPORTS
import React, {useState} from 'react';

// DATA IMPORTS
import riders from '../data/Riders';

import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";

const Locations = () => {
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)

  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <div className="locations d-flex justify-content-center align-items-center my-5">
      
      <Map 
        height={500}
        width={500}
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
          setCenter(center) 
          setZoom(zoom) 
        }} 
      >
        <ZoomControl />
        <Marker 
          width={50}
          anchor={[50.879, 4.6997]} 
          color={color} 
          onClick={() => setHue(hue + 20)} 
        />

      <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
        <div className="test">
          <h2>Test</h2>
        </div>
      </Overlay>


      </Map>




    </div>
  );
};

export default Locations;