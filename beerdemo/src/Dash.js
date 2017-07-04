import React, { Component } from 'react';

// past orders tables
class Dash extends Component {
  render() {
    return (
      <div>
          <h1>Home</h1>
          <h2>Past Orders</h2>
          <article>
            <table>
              <tr>
                <th>Order Number</th>
                <th>Brewery</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>Italian Backyard</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>All Natural Blonde Lager</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Swanson</td>
                <td>$300</td>
                <td>Autumn Hop</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Boneshaker IPA</td>
            </tr>
            </table>
          </article>
      </div>
    );
  }
}

export default Dash;
