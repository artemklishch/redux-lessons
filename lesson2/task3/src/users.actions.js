export const addUser = userData => {
 return {
    type: 'ADDUSER',
    userData,
  };
};

export const deleteUser = userId => {
  return {
    type: 'DELETEUSER',
    userId,
  };
};
