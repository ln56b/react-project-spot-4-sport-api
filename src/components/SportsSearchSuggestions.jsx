import React from 'react';

function SportsSearchSuggestions(props) {
  const options = props.results.map(result => (
    <div key={result.id}>
      <p>{result.name}</p>
    </div>
  ));
  return <div>{options}</div>;
}

export default SportsSearchSuggestions;
