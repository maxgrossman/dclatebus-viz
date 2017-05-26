import React, { Component } from 'react';
import styles from "../styles";

// es6 class syntax
class Viz extends Component {
  render() {
    return (
      <div style={styles.vizStyle}>
        <h1 style={styles.vizTextStyle}>Viz</h1>
      </div>
    )
  }
}

// app has access to state
export default Viz;
