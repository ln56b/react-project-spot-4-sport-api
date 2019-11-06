import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './SportsListFormatted.css';

function SportsListFormatted(props) {
  const [showSearchBar, setShowSearchBar] = useState(null);

  const sportsInLetter = props.sports.map((sport, index) => {
    const notAnIndex = index;
    return (
      <>
        <div onClick={() => setShowSearchBar(sport.sportId)} role="presentation">
          <li key={notAnIndex}>{sport.sportName}</li>
        </div>
        {showSearchBar === sport.sportId && (
          <div>
            <SearchBar />
          </div>
        )}
      </>
    );
  });
  return sportsInLetter;
}

export default SportsListFormatted;
