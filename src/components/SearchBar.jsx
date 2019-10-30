import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

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
    const { dataInput } = this.props;
    const loweredCoordinates = coordinates.toLowerCase();
    const uriTranslatedCoordinates = encodeURIComponent(loweredCoordinates).replace(/%20/g, '+');
    dataInput(uriTranslatedCoordinates);
  }

  render() {
    const { city } = this.props;
    const { handleSearch } = this.props;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input type="search" placeholder="Search a Spot" value={city} onChange={handleSearch} />
          <Button outline color="danger" type="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
