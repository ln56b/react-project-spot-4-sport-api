import React from 'react';
import './App.css';
import SportsPage from './components/SportsPage';
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <MapPage />
      <SportsPage />
    </div>
  );
}

export default App;
