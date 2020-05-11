import { createStore, combineReducers } from 'redux';
import langReducer from './language.reducer.js';
import productReducer from './cart.reducer.js';
import userReducer from './user.reducer.js';

const appStore = combineReducers({
  language: langReducer,
  user: userReducer,
  cart: productReducer,
});
export default createStore(appStore);

