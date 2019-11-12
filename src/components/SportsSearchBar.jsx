import React, { Component } from 'react';
import { Input } from 'reactstrap';
import SportsSearchSuggestions from './SportsSearchSuggestions';

class SportsSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInfo() {
    this.setState({ results: this.state.results });
  }

  handleInputChange() {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 2) {
        this.getInfo();
      } else {
        this.setState({
          results: this.state.results
        });
      }
    });
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
          type="text"
        />
        <SportsSearchSuggestions results={this.state.results} />
        <button>Submit</button>
      </form>
    );
  }
}

export default SportsSearchBar;
