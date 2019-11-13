import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import logo from './images/logomap.png';

function NavBar() {
  return (
    <div className="navContainer">
      <div className="burger">
        <BurgerMenu />
      </div>
      <h1 className="navbar-app-name">
        <NavLink to="/" className="logoLink">
          SPOT
          <span className="navFour">4</span>
          SPORT
        </NavLink>
      </h1>
      <img className="navLogo" src={logo} alt="logo" />
    </div>
  );
}

export default NavBar;
