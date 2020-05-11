import { createStore, combineReducers } from 'redux';
import optionsReduser from './options/options.reducer';

const appStore = combineReducers({
  options: optionsReduser,
});

export default createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);