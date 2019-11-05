import React from 'react';
import L from 'leaflet';
import { Map, CircleMarker, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapTest.css';
import axios from 'axios';
import data from './Data';

let myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/44/3/1572430557-logomap.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

// eslint-disable-next-line react/prefer-stateless-function
class MapTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: ''
    };
  }

  getSportPlaces() {
    axios
      .get('https://sportplaces.api.decathlon.com/api/v1/places?', {
        params: {
          origin: '-73.582,45.511',
          radius: 99,
          sports: 175
        }
      })
      .then(response => response.data.data.features)
      .then(data => {
        this.setState({
          api: data
        });
      });
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center' }} />
        <Map className="map" zoom={this.props.zoomCity} center={this.props.cityCenter}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.city.map(i => {
            return (
              <CircleMarker
                center={[i.coordinates[1], i.coordinates[0]]}
                icon={{
                  iconUrl:
                    'https://www.shutterstock.com/image-vector/simple-red-map-pin-shadow-concept-553653676',
                  iconSize: [38, 95],
                  iconAnchor: [i.coordinates[1], i.coordinates[0]]
                }}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{`Name: ${i.name}, Sport: ${i.sport}`}</span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default MapTest;
