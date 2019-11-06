import React from 'react';

const SportsSearchSuggestions = props => {
  const options = props.results.map(result => <li key={result.id}>{result.name}</li>);
  return <ul>{options}</ul>;
};

export default SportsSearchSuggestions;
