import './App.css';
import Map from './components/map';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://api.open-notify.org/iss-now.json';

function App() {
  const [loading, SetLoading] = useState(false);
  const [longitude, setLongitude] = useState(0.1278);
  const [latitude, setLatitude] = useState(51.5074);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    SetLoading(true);
    const res = await axios.get(url);
    const { longitude, latitude } = await res.date.iss_position;

    setLongitude(parseFloat(longitude));
    setLatitude(parseFloat(latitude));
    SetLoading(false);
  };

  return (
    <div className='App'>
      {!loading ? (
        <Map center={{ lat: latitude, lng: longitude }} zoom={6} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
