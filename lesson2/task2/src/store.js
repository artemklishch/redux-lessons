import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const initialState = {
  arrayOfNums: [],
};

export const counterReduser = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT: return {
      ...state,
      arrayOfNums: state.arrayOfNums.concat(1)
    };
    case DECREMENT: return {
      ...state,
      arrayOfNums: state.arrayOfNums.concat(-1),
    };
    case RESET: return {
      ...state,
      arrayOfNums: [],
    };
    default: return state;
  };
};

export default createStore(counterReduser);