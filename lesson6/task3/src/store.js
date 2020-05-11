import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import weatherReducer from './weather/weather.reducer';
import thunk from 'redux-thunk';

const appStore = combineReducers({
  weather: weatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);