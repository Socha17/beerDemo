import React, { Component } from 'react';
import './App.css';
import Dash from './Dash.js'
import Store from './Store.js'
import AddProduct from './AddProduct.js'

class App extends Component {

  constructor(props) {
  super(props);
    this.state = {
      displayState: {
        showDash: true,
        showStore: false,
        showAddP: false
      }
    };
  }


   toggleDisplay = (e) => {
     let showState = this.state.displayState
     for (let key in showState) {
       showState[key] = false;
     }
     showState[e.target.name] = true;

     this.setState({displayState: showState});
   }


  render() {
    return (
      <div className="app">
        <div className="sidenav">
          <button name="showDash" onClick={this.toggleDisplay}> Home</button> <br/>
          <button name="showStore" onClick={this.toggleDisplay}>Store</button> <br/>
          <button name="showAddP" onClick={this.toggleDisplay}>Add Product</button>
        </div>
        <div className="content">
          {this.state.displayState.showDash && <Dash/>}
          {this.state.displayState.showStore && <Store/>}
          {this.state.displayState.showAddP && <AddProduct/>}
        </div>
      </div>
    );
  }
}

export default App;
