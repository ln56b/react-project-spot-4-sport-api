import React from 'react';
import axios from 'axios';
import SportsListFormatted from './SportsListFormatted';
import './SportsProvider.css';

class SportsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };
    this.getSport = this.getSport.bind(this);
    this.sportsSorted = this.sportsSorted.bind(this);
  }

  componentDidMount() {
    this.getSport();
    this.sportsSorted();
  }

  getSport() {
    axios
      .get('https://sports.api.decathlon.com/sports')
      .then(response => response.data.data)
      .then(data => {
        return data.map(sport => {
          return {
            sportName: sport.attributes.name,
            sportId: sport.id,
            sportFirstLetter: sport.attributes.name[0]
          };
        });
      })
      .then(sortingMySportArray => {
        function compare(a, b) {
          if (a.sportName < b.sportName) {
            return -1;
          }
          if (a.sportName > b.sportName) {
            return 1;
          }
          return 0;
        }
        return sortingMySportArray.sort(compare);
      })
      .then(formattedSportList => {
        this.setState({
          sports: formattedSportList
        });
      });
  }

  sportsSorted() {
    const { sports } = this.state;
    const filterOutNumber = /[A-Z]/;
    const reducer = (carry, c) => {
      const key = c.sportFirstLetter;
      if (!carry[key]) {
        carry[key] = [];
        return carry;
      }
      carry[key].push(c);
      return carry;
    };
    const allMySportsInfos = sports.reduce(reducer, {});
    const allMySportsInfosAlphabet = Object.keys(allMySportsInfos);
    const filteredAlphabet = allMySportsInfosAlphabet.filter(letter =>
      letter.match(filterOutNumber)
    );
    const mySportsListSorted = filteredAlphabet.sort().map(letter => (
      <div>
        <h4>{letter}</h4>
        <SportsListFormatted sports={allMySportsInfos[letter].sort()} />
      </div>
    ));
    return mySportsListSorted;
  }

  render() {
    return (
      <div>
        <this.sportsSorted />
      </div>
    );
  }
}
export default SportsProvider;
