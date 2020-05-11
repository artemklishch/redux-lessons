import { createStore, combineReducers } from 'redux';
import usersReducer from './users.reducers';

const appStore = combineReducers({
  users: usersReducer,
});
export default createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);