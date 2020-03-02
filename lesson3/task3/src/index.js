import store from './store.js';
import setLanguage from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser, removeUser } from './user.actions.js';

store.subscribe(() => console.log(store.getState()));
store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({id: 1, name: 'milk'}));
store.dispatch(addProduct({id: 2, name: 'pork'}));
store.dispatch(addProduct({id: 3, name: 'water'}));
store.dispatch(removeProduct(2));
store.dispatch(setUser({name: 'Bob'}));