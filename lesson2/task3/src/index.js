import store from './store.js';
import { addUserAction, deleteUserAction } from './users.actions.js';

const addUser = userObject => store.dispatch(addUserAction(userObject));

const deleteUser = id => store.dispatch(deleteUserAction(id));

addUser({id: 76, name: 'Sarah'});
// console.log(store.getState());
deleteUser(76);
// console.log(store.getState());