import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapTest(props) {
  return (
    <div>
      <Map
        style={{ height: '480px', width: '100%' }}
        zoom={props.zoomCity}
        center={props.cityCenter}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    </div>
  );
}

export default MapTest;
