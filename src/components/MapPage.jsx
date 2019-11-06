import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MapTest from './MapTest';
import ApiKey from './Key';

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      dataSearched: ''
    };

    this.handleGoClick = this.handleGoClick.bind(this);
    this.isPlaces = this.isPlaces.bind(this);
    this.getLatLon = this.getLatLon.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getLatLon() {
    const { city } = this.state;
    axios
      .get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: city,
          key: ApiKey,
          pretty: 1,
          language: 'fr'
        }
      })
      .then(response => response.data.results)
      .then(data => {
        this.setState({
          dataSearched: data
        });
      });
  }

  handleSearch(event) {
    this.setState({ city: event.target.value });
  }

  handleGoClick() {
    this.getLatLon();
  }

  isPlaces() {
    const { dataSearched } = this.state;
    const { city } = this.state;
    const finder = dataSearched.find(i => {
      return city === i.components.city;
    });
    return finder;
  }

  render() {
    const { dataSearched } = this.state;
    const { city } = this.state;
    const isFinder = dataSearched && this.isPlaces();
    const center = isFinder ? isFinder.geometry : [-0.09, 51.505];
    const zoom = isFinder ? 12 : 3;
    return (
      <div>
        <NavBar />
        <SearchBar dataInput={this.handleGoClick} city={city} handleSearch={this.handleSearch} />
        <MapTest cityCenter={center} zoomCity={zoom} />
      </div>
    );
  }
}

export default MapPage;
