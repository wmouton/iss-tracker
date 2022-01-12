import React from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Map = () => {
    return (
        <div className='map-container'>
            <GoogleMapReact bootstrapURLKeys={{key: API_KEY}}>

            </GoogleMapReact>
        </div>
    )
}

export default Map
