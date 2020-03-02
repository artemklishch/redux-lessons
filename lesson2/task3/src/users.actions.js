import store from './store.js';

export const addUser = userData => {
 const action = {
    type: 'ADDUSER',
    userData,
  };
  store.dispatch(action);
  return action;
};

export const deleteUser = userId => {
  const action = {
    type: 'DELETEUSER',
    userId,
  };
  store.dispatch(action);
  return action;
};
