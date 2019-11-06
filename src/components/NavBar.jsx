import React from 'react';
import './NavBar.css';
import Burger from './Burger';
import logo from './images/logomap.png';

function NavBar() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <h1>
        SPOT
        <span className="four">4</span>
        SPORT
      </h1>
      <Burger />
    </div>
  );
}

export default NavBar;
