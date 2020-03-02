import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

addUser({ id: 76, name: 'Sarah' });
// console.log(store.getState());
deleteUser(76);
// console.log(store.getState());

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  // const afterDelete = store.getState();
  // console.log(afterDelete);
});