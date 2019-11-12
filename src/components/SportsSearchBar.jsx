import React, { Component } from 'react';
import SportsSearchSuggestions from './SportsSearchSuggestions';

class SportsSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: this.props.results
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange() {
    this.setState({ query: this.search.value });
  }

  handleSubmit(event) {
    alert('submitted : ' + this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter a sport"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <SportsSearchSuggestions results={this.state.results} />
        <button>Submit</button>
      </form>
    );
  }
}

export default SportsSearchBar;
