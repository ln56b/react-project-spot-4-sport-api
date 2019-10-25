import React from 'react';
import './SportsListAlphab.css';
import './SportsByFirstChar.css';

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
    id: 5,
    type: 55,
    attributes: {
      name: 'cycling'
    }
  },
  {
    id: 6,
    type: 66,
    attributes: {
      name: 'cross-country running'
    }
  },
  {
    id: 7,
    type: 77,
    attributes: {
      name: 'discus throw'
    }
  },
  {
    id: 8,
    type: 88,
    attributes: {
      name: 'Equestrianism'
    }
  },
  {
    id: 9,
    type: 99,
    attributes: {
      name: 'Fencing'
    }
  },
  {
    id: 12,
    type: 12,
    attributes: {
      name: 'Horse racing'
    }
  },
  {
    id: 13,
    type: 13,
    attributes: {
      name: 'Judo'
    }
  },
  {
    id: 24,
    type: 24,
    attributes: {
      name: 'Karate'
    }
  },
  {
    id: 25,
    type: 25,
    attributes: {
      name: 'Marathon'
    }
  },
  {
    id: 26,
    type: 26,
    attributes: {
      name: 'Sprint'
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
