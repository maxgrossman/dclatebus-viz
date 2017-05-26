import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

// log what is happening with redux while firing create store
let finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())
)(createStore)

export default function configureStore(initialState = {}) {
  return finalCreateStore(rootReducer, initialState);
}
