import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SportsPage from './components/SportsPage';
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map/:sportId/:city" component={MapPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/sports" component={SportsPage} />
        <Route path="/contactus" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
