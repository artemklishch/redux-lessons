import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => console.log(store.getState()));
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 70, name: 'Dan' }));
store.dispatch(deleteUser(76));
