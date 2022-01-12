import './App.css';
import Map from './components/map';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, SetLoading] = useState(false);
  const [longetude, setLongetude] = useState(0.1278);
  const [latitude, setLatitude] = useState(51.5074);

  const getLocation = async () => {
    SetLoading(true);
  };

  return (
    <div className='App'>
      {!loading ? (
        <Map center={{ lat: latitude, lng: longetude }} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
