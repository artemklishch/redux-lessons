

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};

export const reset = () => {
  return {
    type: 'COUNTER/RESET',
  };
};

export const counterReducer = (state = 0, action) => {
  switch(action.type){
    case 'COUNTER/INCREMENT': return state + 1;
    case 'COUNTER/DECREMENT': return state - 1;
    case 'COUNTER/RESET': return 0;
    default: return state;
  };
};

