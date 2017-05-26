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
      <div style={styles.appStyling}>
        <h1>To Do List</h1>
        <UserInfo actions={this.props.actions} user={this.props.user} style="listStyling"/>
        <ToDoInput addTodo={this.props.actions.addTodo}/>
        <ToDoList actions={this.props.actions} todos={this.props.todos} />
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
