import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actionCreators';

const Counter = ({counter, incr, dec, res}) => {
  return (
    <div className="counter">
    <button className="counter__button" onClick={dec}>
      -
    </button>
    <span className="counter__value" onClick={res}>
      {counter}
    </span>
    <button className="counter__button" onClick={incr}>
      +
    </button>
  </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

// const mapDispatch = dispatch => {
//   return {
//     incr: () => dispatch(increment()),
//     dec: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   };
  
// };

const mapDispatch = {
    incr: increment,
    dec: decrement,
    res: reset,  
};

const connector = connect(mapState, mapDispatch); 

export default connector(Counter);