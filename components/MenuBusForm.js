import React, { Component } from 'react';

// es6 class syntax
class MenuBusForm extends Component {
  render() {
    return (
      <div>
        <form>
          <select>
            //script to add all busses from db
            <option value="S9">S9</option>
            <option value="54">54</option>
          </select>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// app has access to state
export default MenuBusForm;
