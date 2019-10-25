import React, { components } from 'react';
import { Map, CircleMarker, TileLayer } from 'react-leaflet';
import './InitMap.css';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

class InitMap extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { place: '' };
    this.getPlace = this.getPlace.bind(this);
  }

  getPlace() {
    axios
      .get(
        'https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=175'
      )
      .then(response => response.data.data.features.geometry.coordinates)
      .then(coordinates => {
        this.setState({
          place: coordinates
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Map className="map" zoom={1} center={[-0.09, 51.505]}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <button type="button" onClick={this.getPlace}>
            Get Random Place
          </button>
          <CircleMarker center={[this.getPlace[1], this.getPlace[0]]} />
        </Map>
      </div>
    );
  }
}

export default InitMap;
