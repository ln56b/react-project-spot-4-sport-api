import React, { Fragment } from 'react';
import { Button, Form, Input, UncontrolledCollapse, CardBody, Card } from 'reactstrap';

import MapCheckbox from './MapCheckbox';
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
      <div className="first-container">
        <div className="searchbar-container">
          <Form onSubmit={this.handleSubmit}>
            <Input type="search" placeholder="Your spot" value={city} onChange={handleSearch} />
            <Button id="search-button" type="submit">
              <span role="img">🔎</span>
            </Button>
          </Form>
          <span className="toggle-filters">
            <Button id="toggler">Filters</Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  <MapCheckbox />
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
