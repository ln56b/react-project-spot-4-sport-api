import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
            value={this.props.city}
            onChange={this.props.handleSearch}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
