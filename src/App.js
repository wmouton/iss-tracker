import './App.css';
import Map from './components/map';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [longetude, setLongetude] = useState(0.1278);
  const [latitude, setLatitude] = useState(51.5074);

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
