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
      pretty: 1,
      api: '',
      language: 'fr'
    };

    this.handleGoClick = this.handleGoClick.bind(this);
    this.isPlaces = this.isPlaces.bind(this);
    this.getLatLon = this.getLatLon.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleGoClick() {
    this.getLatLon();
  }

  handleSearch(event) {
    this.setState({ city: event.target.value });
  }

  getLatLon() {
    axios
      .get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: this.state.city,
          key: ApiKey,
          pretty: this.state.pretty,
          language: this.state.language
        }
      })
      .then(response => response.data.results)
      .then(data => {
        this.setState({
          api: data
        });
      });
  }

  isPlaces() {
    const finder = this.state.api.find(i => {
      return this.state.city === i.components.city;
    });
    return finder;
  }

  render() {
    const isFinder = this.state.api && this.isPlaces();
    const center = isFinder ? isFinder.geometry : [-0.09, 51.505];
    const zoom = isFinder ? 12 : 3;
    return (
      <div>
        <NavBar />
        <SearchBar
          dataInput={this.handleGoClick}
          city={this.state.city}
          handleSearch={this.handleSearch}
        />
        <MapTest cityCenter={center} zoomCity={zoom} />
      </div>
    );
  }
}

export default MapPage;
