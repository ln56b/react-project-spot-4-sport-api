import React from 'react';

function SportsSearchSuggestions(props) {
  const options = props.sports.map(sport => {
    return <li key={sport.id}>{sport.name}</li>;
  });
  return <ul>{options}</ul>;
}

export default SportsSearchSuggestions;
