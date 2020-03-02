import './index.scss';
import store, { increment, decrement, reset } from './store.js';

const resultElem = document.querySelector('.counter__result');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const incrementBtn = document.querySelector('[data-action="increment"]'); 

const onIncrement = () => store.dispatch(increment());
const onDecrement = () => store.dispatch(decrement());
const onReset = () => store.dispatch(reset());
incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.arrayOfNums
    .reduce((acc,num) => acc + num, 0);

  const stringOfNums = state.arrayOfNums
    .map(num => num <= 0 ? String(num) : `+${String(num)}`) 
    .join('');

  resultElem.textContent = state.arrayOfNums.length === 0 
    ? '' : `${stringOfNums} = ${currentValue}`;
});

