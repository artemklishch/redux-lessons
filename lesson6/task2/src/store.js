import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import usersReducer from './users/users.reducer';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  usersReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
);