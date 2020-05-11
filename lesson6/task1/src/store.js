import { createStore, compose, applyMiddleware } from 'redux';
import { counterReducer } from './actionCreators';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  counterReducer,
  composeEnhancers(
    applyMiddleware(logger)
  ),
);