import React, { Component } from 'react';
import MenuBusForm from './MenuBusForm';
import MenuBusReset from './MenuBusReset'
import styles from '../styles'

// es6 class syntax
class Menu extends Component {
  render() {
    return (
      <div style={styles.menuStyle}>
        <h2>This is the dclatebus-menu</h2>
        <MenuBusForm/>
        <MenuBusReset/>
      </div>
    )
  }
}

// app has access to state
export default Menu;
