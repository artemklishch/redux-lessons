export const USER_NAME = 'USERS/USER_NAME';

export const onFetchUserData = userName => {
  return {
    type: USER_NAME,
    payload: {
      userName,
    }
  };
};