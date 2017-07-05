import React, { Component } from 'react';

// NOTES
// add different images per beer
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
      <img className="beerImg" src='http://i.imgur.com/kIXhjlE.jpg' alt="beerPic"></img> <br/>
      <span>Name:</span>
      <span>{beer[i].type}</span> <br/>
      <span>Price:</span>
      <span>{beer[i].price}</span> <br/>
      <button>Add To Order</button>
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
