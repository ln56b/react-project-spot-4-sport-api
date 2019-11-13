import React, { Fragment } from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import './MapPopup.css';

let myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/44/3/1572430557-logomap.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

function MapSportPlaceMakerLayer(props) {
  const { dataMarkers } = props;
  const sportPlacePosition = dataMarkers
    .filter(sportPlace => sportPlace.geometry.type === 'Point')
    .map(markers => {
      const coords = markers.geometry.coordinates.reverse();
      const websiteLink = markers.properties.contact_details.website;
      const adressLink = markers.properties.address_components.address;
      const cityLink = markers.properties.address_components.city;
      return (
        <Marker position={coords} icon={myIcon}>
          <Popup>
            <div className="popup">
              <h2>{markers.properties.name}</h2>
              {adressLink ? <h5>{adressLink}</h5> : ''}
              {cityLink ? <h5>{cityLink}</h5> : ''}
              {websiteLink ? <a href={websiteLink}>Website</a> : ''}
            </div>
          </Popup>
        </Marker>
      );
    });
  return <Fragment>{sportPlacePosition}</Fragment>;
}

export default MapSportPlaceMakerLayer;
