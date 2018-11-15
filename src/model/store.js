import { combineReducers, compose, createStore } from 'redux';

import reducers from 'model/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers()
);

export default store;
