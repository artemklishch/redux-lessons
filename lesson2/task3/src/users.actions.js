export const addUserAction = userData => {
  return {
    type: 'ADDUSER',
    user: userData,
  };
};

export const deleteUserAction = id => {
  return {
    type: 'DELETEUSER',
    userId: id,
  };
};
