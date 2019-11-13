import React, { Fragment } from 'react';
import axios from 'axios';
import SportsListFormatted from './SportsListFormatted';
import './SportsProvider.css';
import SportsSearchBar from './SportsSearchBar';

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
    const url = 'https://sports.api.decathlon.com/sports';
    axios
      .get(url)
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
      <>
        <div></div>
        <div>
          <h4>{letter}</h4>
          <hr className="hr" />
          <SportsListFormatted sports={allMySportsInfos[letter]} />
        </div>
      </>
    ));
    return mySportsListSorted;
  }

  render() {
    return (
      <div>
        <SportsSearchBar results={this.state.sports} />
        <this.sportsSorted />
      </div>
    );
  }
}
export default SportsProvider;
