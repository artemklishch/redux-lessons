import { USER_ADD, USER_DELETE, USER_UPDATE } from './store.js';

export const addUser = userData => {
  return {
    type: USER_ADD,
    payload: {
      userData,
    }
  };
};

export const deleteUser = userId => {
  return {
    type: USER_DELETE,
    payload: {
      userId,
    }
  };
};

export const updateUser = (userId, userData) => {
  return {
    type: USER_UPDATE,
    payload: {
      userId,
      userData
    }
  };
};