export const addUser = userData => {
  return {
    type: 'ADD_USER',
    payload: {
      userData,
    },
  };
};

export const deleteUser = userId => {
  return {
    type: 'DELETE_USER',
    payload: {
      userId,
    },
  };
};

