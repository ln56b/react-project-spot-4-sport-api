import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';
import basketball from '../iconsHomePage/basketball.png';
import iconGeo from '../iconsHomePage/iconGeo.png';

const HomePage = () => {
  return (
    <div className="homePageBody">
      <NavLink to="/map" className="homePageLinks">
        <div className="homePageDivMap">
          <h4>I want a spot</h4>
          <img className="homePageIcon" src={iconGeo} alt="basketball" />
        </div>
      </NavLink>
      <NavLink to="/sports" className="homePageLinks">
        <div className="homePageDivSport">
          <h4>I want a sport</h4>
          <img className="homePageIcon" src={basketball} alt="basketball" />
        </div>
      </NavLink>
    </div>
  );
};

export default HomePage;
