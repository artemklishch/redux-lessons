import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from './store.js';

export default (state = 0, action) => {
  switch(action.type){
    case COUNTER_INCREMENT: return state + 1;
    case COUNTER_DECREMENT: return state - 1;
    case COUNTER_RESET: return 0;
    default: return state;
  };
};