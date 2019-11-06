import React from 'react';
import SportsProvider from './SportsProvider';
import SportsSearchBar from './SportsSearchBar';

const SportsPage = () => {
  return (
    <div>
      <SportsSearchBar />
      <SportsProvider />
    </div>
  );
};

export default SportsPage;
