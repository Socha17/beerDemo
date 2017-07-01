import React, { Component } from 'react';



class Store extends Component {


  // hard coded values
  constructor(props) {
  super(props);
    this.state = {
        beer: [
          {
            id: 1,
            type: "beer1",
            price: 100
          },
          {
            id: 2,
            type: "beer2",
            price: 200
          },
          {
            id: 3,
            type: "beer3",
            price: 300
          },
          {
            id: 4,
            type: "beer4",
            price: 400
          }
        ]
    };
  }


  render() {
    let beer = this.state.beer
    let listItems = beer.map((c, i) =>
    <div className="beer" key={beer[i].id}>
      <h3>{beer[i].type}</h3>
      <h4>{beer[i].price}</h4>
    </div>
    );


    return (
      <div>
          <h1>Store</h1>
          {listItems}
      </div>
    );
  }
}

export default Store;
