import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from './Menu'
import Viz from './Viz'
import actions from '../redux/actions';

// es6 class syntax
class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Viz/>
      </div>
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
