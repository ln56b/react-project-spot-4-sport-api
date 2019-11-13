import React, { Component } from 'react';
import SportsSearchSuggestions from './SportsSearchSuggestions';
import axios from 'axios';

const url = 'https://sports.api.decathlon.com/sports';

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
    axios
      .get(`${url}?query=${this.state.query}`)
      .then(response => response.data.data)
      .then(data => {
        return data.map(sport => {
          return {
            name: sport.attributes.name
          };
        });
      })
      .then(data => {
        console.log(data);
        this.setState({ results: data });
      });
  }

  handleInputChange() {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo();
      } else {
        this.setState({
          results: this.state.results,
          query: this.search.value
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
        <SportsSearchSuggestions results={this.state.results} query={this.state.query} />
        <button>Submit</button>
      </form>
    );
  }
}

export default SportsSearchBar;
