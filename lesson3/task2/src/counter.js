import { createStore } from 'redux';

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT'
  };
};


const counterReducer = tr

export default createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );