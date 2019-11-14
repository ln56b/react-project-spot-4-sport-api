import React from 'react';
import './AboutUs.css';
import WCSLogo from './images/wcsLogo.png';
import JSLogo from './images/jsLogo.png';
import ReactLogo from './images/reactLogo.png';
import GitHubLogo from './images/githubLogo.png';
import HeleneProfilePic from './images/HeleneProfilePic.gif';
import CamilleProfilePic from './images/CamilleProfilePic.jpeg';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h2>Wild Code School</h2>
        <div className="intro-container">
          <p className="wcs-description">
            As developers following a 5-months course, we needed to develop a web application for
            our second project. We needed to use an API that listed sports so that we coud create a
            localization app.
            <p>
              <b>Thus, Spot4Sport was created.</b>
            </p>
          </p>
          <img src={WCSLogo} alt="wild code school logo" />
        </div>
      </div>
      <div className="about-us-technologies">
        <h2>Technologies used</h2>
        <img src={JSLogo} alt="javascript logo" />
        <p>JavaScript</p>
        <img src={ReactLogo} alt="react logo" />
        <p>React JS</p>
        <img src={GitHubLogo} alt="github logo" />
        <p>Git & GitHub</p>
      </div>
      <div className="about-us-links">
        <h2>More information</h2>
        <img src={HeleneProfilePic} alt="Helene profile pic" />
        <p>LinkedIn</p>
        <p>GitHub</p>
        <img src={CamilleProfilePic} alt="Camille profile pic" />
        <p>LinkedIn</p>
        <p>GitHub</p>
        {/* <img src={} alt="Virginie profile pic" />
        <p>LinkedIn</p>
        <p>GitHub</p>
        <img src={} alt="Guillaume profile pic" />
        <p>LinkedIn</p>
        <p>GitHub</p> */}
      </div>
    </div>
  );
}

export default AboutUs;
