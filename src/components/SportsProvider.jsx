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
      .then(formattedSportList => {
        this.setState({
          sports: formattedSportList
        });
      });
  }

  sportsSorted() {
    const { sports } = this.state;
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
    const etBienOui = allMySportsInfosAlphabet.sort().map(letter => (
      <div>
        <h4>{letter}</h4>
        <hr className="hr" />
        <SportsListFormatted sports={allMySportsInfos[letter]} />
      </div>
    ));
    return etBienOui;
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
