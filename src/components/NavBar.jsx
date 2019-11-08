import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Burger from './Burger';
import logo from './images/logomap.png';

function NavBar() {
  return (
    <div className="navContainer">
      <img className="navLogo" src={logo} alt="logo" />
      <h1>
        <NavLink to="/" className="logoLink">
          SPOT
          <span className="navFour">4</span>
          SPORT
        </NavLink>
      </h1>
      <Burger />
    </div>
  );
}

export default NavBar;
