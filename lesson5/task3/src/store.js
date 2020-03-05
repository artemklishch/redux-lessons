import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const appStore = combineReducers({
  users: usersReducer,
});
export default createStore(appStore);