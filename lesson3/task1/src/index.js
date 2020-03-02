import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import { userAdd, userDelete, userUpdate } from './users.actions.js';

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(userAdd({id: 1, name: 'Tom'}));
store.dispatch(userAdd({id: 2, name: 'Bob'}));
store.dispatch(userDelete(1));
store.dispatch(userUpdate(2, {name: 'Bob Martin'}));