import React, { Component } from 'react';
import SportsSearchSuggestions from './SportsSearchSuggestions';

class SportsSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    alert('submitted : ' + this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="query"
          placeholder="Enter a sport"
          type="text"
          value={this.state.query}
          onChange={this.handleInput}
        />
        <SportsSearchSuggestions sports={this.state.suggestions} />
        <button>Submit</button>
      </form>
    );
  }
}

export default SportsSearchBar;
