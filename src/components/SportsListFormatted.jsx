import React from 'react';

function SportsListFormatted(props) {
  const sportsInLetter = props.sports.map(sport => {
    return <li>{sport.sportName}</li>;
  });
  return sportsInLetter;
}

export default SportsListFormatted;
