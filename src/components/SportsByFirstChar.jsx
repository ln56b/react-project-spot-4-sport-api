import React from 'react';
import './SportsListAlphab.css';

const sportsList = [
  {
    id: 1,
    type: 11,
    attributes: {
      name: 'Baseball'
    }
  },
  {
    id: 2,
    type: 22,
    attributes: {
      name: 'American Football'
    }
  },
  {
    id: 3,
    type: 33,
    attributes: {
      name: 'Basketball'
    }
  },
  {
    id: 4,
    type: 44,
    attributes: {
      name: 'Archery'
    }
  },
  {
    id: 4,
    type: 44,
    attributes: {
      name: 'Archery'
    }
  },
  {
    id: 4,
    type: 44,
    attributes: {
      name: 'Archery'
    }
  },
  {
    id: 4,
    type: 44,
    attributes: {
      name: 'Archery'
    }
  },
  {
    id: 4,
    type: 44,
    attributes: {
      name: 'Archery'
    }
  }
];

function SportsByFirstChar({ letter }) {
  const sportNames = sportsList.map(sport => sport.attributes.name);
  const sportFilter = sportNames.filter(sport => sport[0] === letter);
  const allSorted = sportFilter.sort();
  return allSorted.map(sport => <li>{sport}</li>);
}

export default SportsByFirstChar;
