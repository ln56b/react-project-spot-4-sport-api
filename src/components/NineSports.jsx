import React from 'react';
import './NineSports.css';

class NineSports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <div className="homePage-Mobile-Sports">
          <div className="homePage-Mobile-Sports-Display">
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/football.png')}
                alt="soccer's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/basketball.png')}
                alt="basketball's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/boxing-1.png')}
                alt="boxing's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/hockey.png')}
                alt="hockey's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/ping-pong.png')}
                alt="table tennis' icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/rugby.png')}
                alt="rugby's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/tennis.png')}
                alt="tennis's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/running.png')}
                alt="running's icon"
                className="homePage-Icons-Size"
              />
            </button>
            <button type="button" onClick={this.showModal}>
              <img
                src={require('../iconsHomePage/yoga.png')}
                alt="yoga's icon"
                className="homePage-Icons-Size"
              />
            </button>
          </div>
          <button type="button" className="homePage-AllSports-btn">
            All sports
          </button>
        </div>
        <div className={this.state.show ? 'HomePageShowModal' : 'HomePageHideModal'}>
          <div className="HomePageGreyBackground">
            <div className="HomePageModal">
              <p>SearchBar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NineSports;
