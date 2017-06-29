import React, { Component } from 'react';
import './App.css';
import Dash from './Dash.js'

class App extends Component {

  constructor(props) {
  super(props);
    this.state = {
      displayState: {
        showDash: true
      }
    };
  }



  render() {
    return (
      <div className="app">
        <div className="sidenav">
          <span>Home</span> <br/>
          <span>Store</span> <br/>
          <span>Add Product</span>
        </div>
        <div className="content">
          <h1>Hello</h1>
          {this.state.displayState.showDash && <Dash/>}
        </div>
      </div>
    );
  }
}

export default App;
