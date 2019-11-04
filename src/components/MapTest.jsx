/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import L from 'leaflet';
import { Map, CircleMarker, TileLayer, Tooltip, Marker, Popup } from 'react-leaflet';
//import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import './MapTest.css';
import data from './Data';

const myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/44/3/1572430557-logomap.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

class MapTest extends React.Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09
    },
    haveUsersLocation: false,
    zoom: 2
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 13
      });
    });
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    const isUserLocation = this.state.haveUsersLocation;
    const voilaZoom = isUserLocation ? this.state.zoom : this.props.zoomCity;
    const voilaCenter = isUserLocation ? position : this.props.cityCenter;
    return (
      <div>
        <h3 style={{ textAlign: 'center' }} />
        <Map className="map" zoom={voilaZoom} center={voilaCenter}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.haveUsersLocation ? (
            <Marker position={position} icon={myIcon}>
              <Popup>You are here mothafucka</Popup>
            </Marker>
          ) : (
            ''
          )}
        </Map>
      </div>
    );
  }
}

export default MapTest;
