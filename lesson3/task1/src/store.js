import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer.js';
import usersReducer from './users.reducer.js';

export const COUNTER_INCREMENT = 'COUNTER/INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER/DECREMENT';
export const COUNTER_RESET = 'COUNTER/RESET';

export const USER_ADD = 'USER/ADD';
export const USER_DELETE = 'USER/DELETE';
export const USER_UPDATE = 'USER/UPDATE';

const appStore = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );