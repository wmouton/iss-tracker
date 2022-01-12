import React from 'react';
import GoogleMapReact from 'google-map-react';
import iss from '../img/satellite.png';

const API_KEY = process.env.REACT_APP_API_KEY;

const Map = ({ center, zoom }) => {
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          <img src={iss} alt="iss" className='iss-icon' />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 51.5074,
    lng: 0.1278,
  },
  zoom: 6,
};

export default Map;
