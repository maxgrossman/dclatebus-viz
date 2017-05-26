import React, { Component } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions'
import UserInfo from './UserInfo'
import styles from "../styles"

// es6 class syntax
class App extends Component {
  render() {
    return (
    )
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

// app has access to state
export default connect(mapStateToProps, mapDispatchToProps)(App);
