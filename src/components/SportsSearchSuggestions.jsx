import React from 'react';
import './SportSearchSuggestions.css';
function SportsSearchSuggestions({ query, results }) {
  // const options = props.results.map(result => (
  //   <div key={result.id}>
  //     <p>{result.name}</p>
  //   </div>
  // ))
  // return <div>{options}</div>;
  // const { query } = props.query;
  const options = results.map(res => {
    if (res.name.includes(query)) {
      return (
        <div className="suggestion" key={res.id}>
          <p>{res.name}</p>
        </div>
      );
    }
  });
  console.log(options);
  return <div className="result">{options}</div>;
  //   const options = () => {
  //     for (let i = 0 ; i < props.results.length ; i+=1) {
  //     if (props.results[i].name === query) {
  //       return (
  //       <div>
  //         <p>{props.results[i].name}</p>
  //       </div>
  //       )
  //     }
  //   }
  // }
  // console.log(options)
  // return options
}

export default SportsSearchSuggestions;
