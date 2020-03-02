import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
// console.log(store.getState());
store.dispatch(deleteUser(76));
// console.log(store.getState());

store.subscribe(() => {
  // addUser({ id: 76, name: 'Sarah' });
  // const state = store.getState();
  // console.log(state);
  // const afterDelete = store.getState();
  // console.log(afterDelete);
});