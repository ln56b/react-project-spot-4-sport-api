import React from 'react';

function SportsSearchSuggestions(props) {
  const { query } = props.query;
  const options = props.results.map(result => {
    if (result.includes(query)) {
      <div key={result.id}>
        <p>{result.name}</p>
      </div>;
    }
  });
  return <div>{options}</div>;
}

export default SportsSearchSuggestions;
