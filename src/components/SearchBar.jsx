import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

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
    this.props.dataInput(loweredCoordinates);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="search"
            placeholder="Search a Spot"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.coordinates}
            onChange={this.handleSearch}
          />
          <Button outline color="danger" type="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
