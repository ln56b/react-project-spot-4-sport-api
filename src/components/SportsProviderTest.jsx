import React from 'react';
import axios from 'axios';
import SportsListFormatted from './SportsListFormatted';

class SportsProviderTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };
    this.getSport = this.getSport.bind(this);
    this.getLetterArray = this.getLetterArray.bind(this);
    this.sportsSported = this.sportsSported.bind(this);
  }

  componentDidMount() {
    this.getSport();
    this.getLetterArray();
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

  getLetterArray() {
    const letterArr = [];
    for (let i = 0; i < 26; i += 1) {
      letterArr.push(String.fromCharCode(65 + i));
    }
    return letterArr;
  }

  sportsSported() {
    let killMe = [];
    for (let i = 0; i < 26; i += 1) {
      killMe.push({ letter: this.getLetterArray()[i] });
      for (let j = 0; j < this.state.sports.length; j += 1) {
        if (this.getLetterArray()[i] === this.state.sports[j].sportFirstLetter) {
          killMe.push({
            name: this.state.sports[j].sportName,
            id: this.state.sports[j].sportId,
            firstLetter: this.state.sports[j].sportFirstLetter
          });
        }
      }
    }
    return killMe;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.sportsSported}></button>
        {/* <div><SportsListFormatted name={this.sportsSported.killMe.name}/>
        </div> */}
      </div>
    );
  }
}
export default SportsProviderTest;
