import React from 'react';

function SportsSearchSuggestions(props) {
  const options = props.results.map(result => {
    return <li key={result.id}>{result.name}</li>;
  });
  return <ul>{options}</ul>;
}

export default SportsSearchSuggestions;
