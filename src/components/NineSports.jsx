import React from 'react';
import './NineSports.css';
import basketball from '../iconsHomePage/basketball.png';
import football from '../iconsHomePage/football.png';
import boxing from '../iconsHomePage/boxing-1.png';
import hockey from '../iconsHomePage/hockey.png';
import pingpong from '../iconsHomePage/ping-pong.png';
import tennis from '../iconsHomePage/tennis.png';
import running from '../iconsHomePage/running.png';
import yoga from '../iconsHomePage/yoga.png';
import rugby from '../iconsHomePage/rugby.png';
import ModalTry from './ModalTry';

class NineSports extends React.Component {
  render() {
    return (
      <div className="homePage-Mobile">
        <div className="homePage-Mobile-Sports">
          <ModalTry />
          <div className="homePage-Mobile-Sports-Display">
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={football} alt="soccer's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={basketball} alt="basketball's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={boxing} alt="boxing's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={hockey} alt="hockey's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={pingpong} alt="table tennis' icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={rugby} alt="rugby's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={tennis} alt="tennis's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={running} alt="running's icon" className="homePage-Icons" />
            </button>
            <button type="button" onClick={this.showModal} className="homePage-Icons-Size">
              <img src={yoga} alt="yoga's icon" className="homePage-Icons" />
            </button>
          </div>
          <button type="button" className="homePage-AllSports-btn">
            All sports
          </button>
        </div>
      </div>
    );
  }
}
export default NineSports;
