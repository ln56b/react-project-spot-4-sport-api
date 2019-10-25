import React from 'react';
import axios from 'axios';
import SportsByFirstChar from './SportsByFirstChar';
import DivStructure from './DivStructure';

function SportsPage() {
  return (
    <div>
      <DivStructure />
    </div>
  );
}

// class SportsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sport: '',
//       id: null
//     };
//     this.getSport = this.getSport.bind(this);
//   }
//   getSport() {
//     axios
//       .get('https://sports.api.decathlon.com/sports')
//       .then(response => response.data.data[1])
//       .then(data => {
//         const { id, attributes } = data;
//         this.setState({
//           sport: attributes.name,
//           id,
//         });
//       });

//   render() {
//     const { sport } = this.state;
//     const { id } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={this.getSport}>
//           New Sport
//         </button>
//         <DivStructure />
//         <p>{sport}</p>
//         <p>{id}</p>
//       </div>
//     );
//   }
// }

export default SportsPage;
