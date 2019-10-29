import React from 'react';
import { Map, CircleMarker, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapTest.css';
import data from './Data';

// eslint-disable-next-line react/prefer-stateless-function
class MapTest extends React.Component {
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
