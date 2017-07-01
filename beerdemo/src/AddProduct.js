import React, { Component } from 'react';

class AddProduct extends Component {
  render() {
    return (
      <div>
          <h1>Add Product</h1>

          <section>
            <form action="">
              <label for="fname">Name of Beer</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Price</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="country">Type</label>
              <select id="country" name="country">
                <option value="australia">Light</option>
                <option value="canada">Dark</option>
              </select>

              <input type="submit" value="Submit"/>
            </form>
          </section>
      </div>
    );
  }
}

export default AddProduct;
