import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({ coordinates: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { coordinates } = this.state;
    const loweredCoordinates = coordinates.toLowerCase();
    const uriTranslatedCoordinates = encodeURIComponent(loweredCoordinates).replace(/%20/g, '+');
    this.props.dataInput(uriTranslatedCoordinates);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="Search a Spot"
            value={this.state.coordinates}
            onChange={this.handleSearch}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
