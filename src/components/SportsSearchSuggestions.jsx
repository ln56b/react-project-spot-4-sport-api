import React from 'react';

function SportsSearchSuggestions(props) {
  const options = props.sports.map(sport => {
    return <li key={sport.id}>{sport.name}</li>;
  });
  return options;
}

export default SportsSearchSuggestions;
