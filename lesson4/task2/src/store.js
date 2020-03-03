import { createStore, combineReducers } from 'redux';
import userReducer from './users/users.reducer';

const appStore = combineReducers({
  users: userReducer
});

export default createStore(appStore);