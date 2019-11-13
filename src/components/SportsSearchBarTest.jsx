import React, { Component } from 'react';
import SportsSearchSuggestions from './SportsSearchSuggestions';

class SportsSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      results: []
    };
    this.getInput = this.getInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInput = () => {
    this.setState({
      query: this.sports
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getInput();
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Enter a sport"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <SportsSearchSuggestions results={this.state.results} />
      </form>
    );
  }
}

export default SportsSearchBar;
