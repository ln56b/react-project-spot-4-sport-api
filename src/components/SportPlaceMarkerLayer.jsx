import React, { Fragment } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

let myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/44/3/1572430557-logomap.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

function SportPlaceMakerLayer(props) {
  const { api } = props;
  const sportPlacePosition = api
    .filter(sportPlace => sportPlace.geometry.type === 'Point')
    .map(markers => {
      const coords = markers.geometry.coordinates.reverse();
      return (
        <Marker position={coords} icon={myIcon}>
          <Popup></Popup>
        </Marker>
      );
    });
  return <Fragment>{sportPlacePosition}</Fragment>;
}

export default SportPlaceMakerLayer;
