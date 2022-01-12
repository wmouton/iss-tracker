import './App.css';
import Map from './components/map';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      {!loading ? <Map /> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
