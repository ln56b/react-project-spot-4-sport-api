import React from 'react';
import axios from 'axios';

class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: '',
      ids: null
    };
    this.getSport = this.getSport.bind(this);
  }

  getSport() {
    for (let i = 0; i < 10; i += 1) {
      axios
        .get('https://sports.api.decathlon.com/sports')
        .then(response => response.data.data[i])
        .then(data => {
          const { id, attributes } = data;
          this.setState({
            sports: attributes.name,
            ids: id
          });
        });
    }
  }

  render() {
    const { sports } = this.state;
    const { ids } = this.state;
    return (
      <div>
        <button type="button" onClick={this.getSport}>
          go get sports
        </button>
        <p>{sports}</p>
        <p>{ids}</p>
      </div>
    );
  }
}

// function SportsByFirstChar({sport}) {
//   const sportNames = sportsList.map(sport => sport.attributes.name);
//   const allSorted = sportNames.sort();
//   return allSorted.map(sport => <li>{sport}</li>);
// }
export default SportsList;
