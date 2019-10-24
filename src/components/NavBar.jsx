import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://png2.cleanpng.com/sh/1869af44f3706fd105298895b1cb21dd/L0KzQYq3UsA2N6pqe5H0aYP2gLBuTfxwb5CyetNreYPshMXwjvcua5luhNY2Y3H1dX71gf5vgV5nedREc3n3hLb5TfV1NZ90jdD4dT3zf8b5TfdiepVqi59tZX7pcbB7k71mfF5neZ8AY0W8dofqVPNla5U5S5C6Nka3RoG8VME2PGo4UasCNEi7RIS1kP5o/kisspng-logo-babysitting-child-care-nanny-babysitter-et-nounou-pour-gardes-denfants-et-ba-5c59f6c4cdcd43.166460541549399748843.png"
        alt="logo"
      />
      <h1>
        SPOT
        <span className="four">4</span>
        SPORT
      </h1>
      <img
        className="burger"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        alt="burger"
      />
    </div>
  );
}

export default NavBar;
