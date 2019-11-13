import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SportsPage from './components/SportsPage';
<<<<<<< HEAD
// import MapPage from './components/MapPage';
=======
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
>>>>>>> dev

function App() {
  return (
    <div>
<<<<<<< HEAD
      {/* <MapPage /> */}
      <SportsPage />
=======
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/sports" component={SportsPage} />
      </Switch>
>>>>>>> dev
    </div>
  );
}

export default App;
