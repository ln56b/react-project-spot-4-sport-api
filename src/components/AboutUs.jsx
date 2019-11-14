import React from 'react';
import Footer2 from './Footer2';
import './AboutUs.css';
import WCSLogo from './images/wcsLogo.png';
import JSLogo from './images/jsLogo.png';
import ReactLogo from './images/reactLogo.png';
import GitLogo from './images/gitLogo.png';
import GitHubLogo from './images/githubLogo.png';
import HeleneProfilePic from './images/HeleneProfilePic.gif';
import CamilleProfilePic from './images/CamilleProfilePic.jpeg';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <div className="about-us-container">
        <div className="about-us-wcs">
          <h2>Wild Code School</h2>
          <div className="intro-container">
            <p className="wcs-description">
              As developers following a 5-months course, we needed to develop a web application for
              our second project. We needed to use an API that listed sports so that we coud create
              a localization app.
              <p>
                <b>Thus, Spot4Sport was created.</b>
              </p>
            </p>
            <img src={WCSLogo} alt="wild code school logo" />
          </div>
        </div>
        <div className="about-us-techno">
          <h2>Technologies used</h2>
          <div className="tech-container">
            <div className="techno-first-line">
              <div className="tech-paragraph">
                <img className="tech-logos" src={JSLogo} alt="javascript logo" />
                <p>JavaScript</p>
              </div>
              <div className="tech-paragraph">
                <img className="tech-logos" src={ReactLogo} alt="react logo" />
                <p>React JS</p>
              </div>
            </div>
            <div className="techno-second-line">
              <div className="tech-paragraph">
                <img className="tech-logos" src={GitLogo} alt="git logo" />
                <p>Git</p>
              </div>
              <div className="tech-paragraph">
                <img className="tech-logos" src={GitHubLogo} alt="github logo" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-links">
          <h2>More information</h2>
          <div>
            <div className="profile-description">
              <img className="profile-pic" src={HeleneProfilePic} alt="Helene profile pic" />
              <div className="profile-links">
                <p>
                  <b>Hélène Baudrand</b>
                </p>
                <span>
                  <a href="">LinkedIn</a>
                </span>
                <span>GitHub</span>
              </div>
            </div>
            <div className="profile-description">
              <img className="profile-pic" src={CamilleProfilePic} alt="Camille profile pic" />
              <div className="profile-links">
                <p>
                  <b>Camille Coin</b>
                </p>
                <span>
                  <a href="https://www.linkedin.com/in/camillecoin/">LinkedIn</a>
                </span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default AboutUs;