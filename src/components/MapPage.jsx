import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MapTest from './MapTest';
import places from './Places';

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      city: ''
    };

    this.handleGoClick = this.handleGoClick.bind(this);
    this.isPlaces = this.isPlaces.bind(this);
  }

  handleGoClick(city) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ city });
  }

  isPlaces() {
    const finder = places.city.find(i => {
      return this.state.city === i.name;
    });
    console.log(finder);
    return finder;
  }

  render() {
    const isFinder = this.isPlaces();
    const center = isFinder ? isFinder.coordinates : [-0.09, 51.505];
    const zoom = isFinder ? 12 : 3;
    return (
      <div>
        <NavBar />
        <SearchBar dataInput={this.handleGoClick} />
        <MapTest cityCenter={center} zoomCity={zoom} />
      </div>
    );
  }
}

export default MapPage;
