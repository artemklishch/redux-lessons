import { USER_ADD, USER_DELETE, USER_UPDATE } from './store.js';

export const userAdd = userData => {
  return {
    type: USER_ADD,
    payload: {
      userData,
    }
  };
};

export const userDelete = userId => {
  return {
    type: USER_DELETE,
    payload: {
      userId,
    }
  };
};

export const userUpdate = (userId, userData) => {
  return {
    type: USER_UPDATE,
    payload: {
      userId,
      userData
    }
  };
};