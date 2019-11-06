import React from 'react';
import axios from 'axios';
import GetCoordinatesSports from './GetCoordinatesSports';

class SortedSports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: ''
    };
    this.getPlace = this.getPlace.bind(this);
  }

  getPlace() {
    axios
      .get('https://sportplaces.api.decathlon.com/api/v1/places?origin=2.347,48.861&radius=999')
      .then(response => response.data.data.features[0].geometry.coordinates)
      .then(coordinates => {
        this.setState({
          places: coordinates
        });
      });
  }

  render() {
    return (
      <div>
        <GetCoordinatesSports places={this.state.places} />
        <button type="button" onClick={this.getPlace}>
          Get place
        </button>
      </div>
    );
  }
}
export default SortedSports;
