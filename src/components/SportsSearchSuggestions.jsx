import React from 'react';
import { Link } from 'react-scroll';

function SportsSearchSuggestions({ query, results }) {
  const options = results.map(res => {
    if (res.name.includes(query)) {
      return (
        <Link activeClass="active" to={res.name} className="suggestions">
          <p>{res.name}</p>
        </Link>
      );
    }
  });
  return <div className="result">{options}</div>;
}

export default SportsSearchSuggestions;
